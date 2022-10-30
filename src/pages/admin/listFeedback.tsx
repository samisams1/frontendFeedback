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



  render() {
    const { submitted, title, content } = this.state;

    return (
      <div className="submit-form">
        <TutorialsList />
      </div>
    );
  }
}
