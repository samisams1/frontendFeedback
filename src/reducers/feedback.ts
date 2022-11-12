import {
    CREATE_FEEDBACK,
    RETRIEVE_FEEDBACKS,
    UPDATE_FEEDBACK,
    DELETE_ALL_FEEDBACKS,
    DELETE_FEEDBACK,
  } from "../actions/types";
import feedbackData from "../types/feedback.type";
  
  const initialState:any = [];
  
  function tutorialReducer(tutorials = initialState, action:any) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_FEEDBACK:
        return [...tutorials, payload];
  
      case RETRIEVE_FEEDBACKS:
        return payload;
  
      case UPDATE_FEEDBACK:
        return tutorials.map((tutorial:feedbackData) => {
          if (tutorial.title === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });

      case DELETE_ALL_FEEDBACKS:
        return [];
  
      default:
        return tutorials;
    }
  };
  
  export default tutorialReducer;
  