import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  retrieveTutorials,
} from "../../../actions/feedback";

const Example2 = () => {

  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, []);
  return {tutorials}
}
export default Example2;