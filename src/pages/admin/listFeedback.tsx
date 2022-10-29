import { Component, ChangeEvent } from "react";
import FeedbackDataService from "../../services/feedback.service";
import feedbackData from "../../types/feedback.type";
import axios, { AxiosResponse } from 'axios';
import TutorialsList from "../listAll";
type Props = {};

type State = feedbackData & {
  submitted: boolean
};

export default class ListFeedback extends Component<Props, State> {
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
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                className="form-control"
                id="content"
                required
                value={content}
                onChange={this.onChangeDescription}
                name="content"
              />
            </div>

            <button  onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        <TutorialsList />
      </div>
    );
  }
}
