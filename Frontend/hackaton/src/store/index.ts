import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import userSlice from "./user/user-slice";
import volunteerSlice from "./volunteer/volunteer-slice";
import { UserI } from "./user/UserType";
import { VolunteerI } from "./volunteer/VolunteerType";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    user: userSlice.reducer,
    volunteer: volunteerSlice.reducer,
  },
});

export default store;

export interface ReduxInterface {
  user: UserI;
  volunteer: VolunteerI;
  theme: {
    isDarkMode: boolean;
  };
}
