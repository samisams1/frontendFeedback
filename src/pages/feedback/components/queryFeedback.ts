import { useEffect, useState } from "react";
import feedbackService from "../../../services/feedback.service";
import feedbackData from "../../../types/feedback.type";

const FeedbackQuery = () => {
  const [getFeedback, setGetFeedback] = useState<Array<feedbackData>>([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setMessage] = useState("");

    const retrieveFeedbacks =  () => {
        feedbackService.getAll()
          .then((response: any) => {
            setGetFeedback(response.data);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      useEffect(()=>{
        retrieveFeedbacks();
      },[])

const CreateFeedback = () => {
  const data: feedbackData = {
    title: title,
    content: content,
    userId: '1'
  };
  feedbackService.create(data)
  .then((response) => response.data.content)
  console.log('respo')
};
const UpdateFeedback = () =>{
  const data: feedbackData = {
    title: 'kebede',
    content: 'kelem',
    userId: '1'
  };
  const id = 19;
  feedbackService.update(data,id)
  .then((response) => response.data.content)
  console.log("samisams");
}
    return {getFeedback,CreateFeedback,UpdateFeedback,title,content,userId,setTitle,setContent,setMessage};
  };
  
  export default FeedbackQuery;