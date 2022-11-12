import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getEmployees,
} from "../../src/services/eployee";
import { RootState } from "../store";
import feedbackData from "../types/feedback.type";
import { useAppDispatch } from "../store";
export const Employee: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const feedbackList = useSelector(
    (state: RootState) => state.feedback.list.values
  );



  return (
    <>
      <div className="form-container">
      <div className="table-container">
      <tbody>
                    {feedbackList?.map((d: feedbackData, index: number) => {
                      return (
                        <tr key={index}>
                          <td>{d.title}</td>
                          <td>{d.content ? "Active" : "Inactive"}</td>
                          <td>
                          
                            &nbsp;
                          
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
              </div>
      </div>
    </>
  );
};
