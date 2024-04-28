import { UserI } from "../user/UserType";

export type VolunteerI = UserI & {
  user: {
    isVolunteer?: boolean;
  };
};
