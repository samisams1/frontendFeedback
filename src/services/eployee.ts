import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpCommon from "../ http-common";

export const getEmployees = createAsyncThunk("/feedbacks/getFeedbacks", async () => {
    try {
        const response = await HttpCommon.get("/feedbacks")
        return response.data
    } catch (error) {
        console.log(error)
    }
});

