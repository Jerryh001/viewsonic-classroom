import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
    detailCardOpened: boolean;
    studentCardOpened: boolean;
}

export const layoutState: LayoutState = {
    detailCardOpened: true,
    studentCardOpened: true,
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState: layoutState,
    reducers: {
        closeDetailCard(draft) {
            draft.detailCardOpened = false;
        },
        closeStudentCard(draft) {
            draft.studentCardOpened = false;
        },
    },
    selectors: {
        selectDetailCard(state) {
            return state.detailCardOpened;
        },
        selectStudentCard(state) {
            return state.studentCardOpened;
        },
    },
});
