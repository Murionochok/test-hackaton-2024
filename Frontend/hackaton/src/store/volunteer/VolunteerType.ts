import { UserI } from "../user/UserType"

export type VolunteerI = UserI & {
    isVolunteer?: boolean;
}