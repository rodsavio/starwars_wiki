import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { loadingIsVisible: false, menuIsVisible: false },
    reducers: {
        toggleLoading(state) {
            state.loadingIsVisible = !state.loadingIsVisible;
        },
        toggleMenu(state) {
            state.menuIsVisible = !state.menuIsVisible;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;