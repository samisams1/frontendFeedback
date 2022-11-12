import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, } from "../services/eployee";

export const employeeSlice = createSlice({
    name: "feedback",
    initialState: {
        list: {
            isLoading: false,
            status: "",
            values: []
        },
        save: {
            isSaving: false,
            isDeleting: false
        }
    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: {
        [getEmployees.pending.type]: (state, action) => {
            state.list.status = "pending"
            state.list.isLoading = true
        },
        [getEmployees.fulfilled.type]: (state, { payload }) => {
            state.list.status = "success"
            state.list.values = payload
            state.list.isLoading = false
        },
        [getEmployees.rejected.type]: (state, action) => {
            state.list.status = "failed"
            state.list.isLoading = false
        },
    }
})

export default employeeSlice.reducer

