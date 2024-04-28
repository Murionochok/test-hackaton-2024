import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import userSlice from "./user/user-slice";
import volunteerSlice from "./volunteer/volunteer-slice";
import { UserI } from "./user/UserType";
import { VolunteerI } from "./volunteer/VolunteerType";
import requestSlice, { RequestsI } from "./request/request-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    user: userSlice.reducer,
    volunteer: volunteerSlice.reducer,
    requests: requestSlice.reducer,
  },
});

export default store;

export interface ReduxInterface {
  user: UserI;
  volunteer: VolunteerI;
  requests: RequestsI;
  theme: {
    isDarkMode: boolean;
  };
}
