export interface UserRequestData {
  id: number;
  title: string;
  address: string;
  date: string;
  tag: string;
  description: string;
}

export interface UserFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  shortInfo: string;
}
