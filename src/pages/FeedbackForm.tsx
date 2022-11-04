import { Component, ChangeEvent } from "react";
import FeedbackDataService from "../services/feedback.service";
import feedbackData from "../types/feedback.type";
import { TextField } from "@mui/material";
import Button from "../ components/controls/Button";
import Form from "../ components/controls/useForm";
type Props = {};

type State = feedbackData & {
  submitted: boolean
};

export default class CreateFeedback extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
    this.state = {
      title: "",
      content: "",
      userId: "",
      submitted: false
    };
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      content: e.target.value
    });
  }


 

  saveFeedback(event:any) {
    const data: feedbackData = {
      title: this.state.title,
      content: this.state.content,
      userId: '1'
    };
   console.log(data);
   console.log("samisams")

   FeedbackDataService.create(data)
      .then((response: any) => {
        this.setState({
          title: response.data.title,
          content: response.data.content,
           userId: response.data.userId
        });
        console.log(response.data);
        alert("Success")
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newForm() {
    this.setState({
      title: "",
      content: "",
      submitted: false
    });
  }

  render() {
    const { submitted, title, content } = this.state;
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newForm}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div>
            <h4>How are you feeling after the session today? </h4>
            <TextField 
            required
            id="outlined-required"
            label="How are you feeling after the session today"
            multiline
            rows={2}
            value={title}
            onChange={this.onChangeTitle}
            style={{
              width:400
             }}
            />
          
</div>
<div>
  <h4>Are there any topics you would like covered next week? </h4>
<TextField 
required
id="outlined-required"
label="any topics"
multiline
rows={2}
value={content}
onChange={this.onChangeDescription}
style={{
 width:400
}}
/>
</div>
          <Button
     text={"Submit"}
          disabled={!title || !content} variant="contained" onClick={this.saveFeedback}></Button>
          </div>
        )}
      </div>
    );
  }
}
