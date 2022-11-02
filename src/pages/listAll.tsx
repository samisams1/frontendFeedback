import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Component } from "react";
import feedbackService from "../services/feedback.service";
import feedbackData from "../types/feedback.type";

type Props = {};

type State = {
  feedbacks: Array<feedbackData>,
  currentFeedback: feedbackData | null,
  currentIndex: number,
  searchTitle: string
};

export default class FeedbackList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.retrieveFeedback = this.retrieveFeedback.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveFeedback = this.setActiveFeedback.bind(this);

    this.state = {
      feedbacks: [],
      currentFeedback: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveFeedback();
  }



  retrieveFeedback() {
    feedbackService.getAll()
      .then((response: any) => {
        this.setState({
          feedbacks: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveFeedback();
    this.setState({
      currentFeedback: null,
      currentIndex: -1
    });
  }

  setActiveFeedback(feedback: feedbackData, index: number) {
    this.setState({
      currentFeedback: feedback,
      currentIndex: index
    });
  }




  render() {
    const { feedbacks } = this.state;

    return (
      <div className="list row">
        
        <div className="col-md-8">
          <h4>Feedback  List</h4>

          <TableContainer component={Paper}>
      <Table  aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Feedback </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"forsamisams@gmail.com"}
              </TableCell>
              <TableCell align="right">{row.title + " " +row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    );
  }
}