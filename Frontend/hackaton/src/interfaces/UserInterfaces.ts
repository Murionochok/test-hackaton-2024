export interface UserRequestData {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  publicationDate: string;
  title: string;
  address: string;
  date: string;
  tag: string;
  description: string;
  state: string;
}

export interface UserCreateRequestData {
  title: string;
  address: string;
  term: string;
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
  shortInfo?: string;
  file?: File | null;
}

export interface LoginFormData {
  email: string;
  password: string;
}
