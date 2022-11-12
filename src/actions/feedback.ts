import {
    CREATE_FEEDBACK,
    RETRIEVE_FEEDBACKS,
    UPDATE_FEEDBACK,
    DELETE_ALL_FEEDBACKS,
    DELETE_FEEDBACK,
  } from "./types";
  
import feedbackService from "../services/feedback.service";
  export const retrieveTutorials = () => async (dispatch:any) => {
    try {
      const res = await feedbackService.getAll();
  
      dispatch({
        type: RETRIEVE_FEEDBACKS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  