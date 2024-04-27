import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false
}

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme:  (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
