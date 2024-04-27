import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import userSlice from "./user/user-slice";
import { UserI } from "./user/UserType";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

export interface ReduxInterface {
  user: UserI;
  theme: {
    isDarkMode: boolean;
  };
}
