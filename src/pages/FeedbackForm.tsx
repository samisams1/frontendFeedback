import { Component, ChangeEvent } from "react";
import FeedbackDataService from "../services/feedback.service";
import feedbackData from "../types/feedback.type";
import axios, { AxiosResponse } from 'axios';
import { Button, TextField, Typography } from "@mui/material";
type Props = {};

type State = feedbackData & {
  submitted: boolean
};

export default class AddTutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      content: "",
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


 

  saveTutorial() {
    const data: feedbackData = {
      title: this.state.title,
      content: this.state.content
    };
   console.log(data);
   console.log("samisams")

   FeedbackDataService.create(data)
      .then((response: any) => {
        this.setState({
          title: response.data.title,
          content: response.data.content,
        });
        console.log(data);
        console.log('kebede');
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newTutorial() {
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
            <button className="btn btn-success" onClick={this.newTutorial}>
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
            rows={4}
            defaultValue="Hello World"
            value={title}
            onChange={this.onChangeTitle}
            />
</div>
<div>
  <h4>Are there any topics you would like covered next week? </h4>
<TextField 
required
id="outlined-required"
label="any topics"
defaultValue="Hello World"
value={content}
onChange={this.onChangeDescription}
/>
</div>
          <Button disabled={!this.state.value} variant="contained" onClick={this.saveTutorial}>Submit</Button>
          </div>
        )}
      </div>
    );
  }
}
