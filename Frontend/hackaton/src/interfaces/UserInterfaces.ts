export interface UserBasedCardsData {
  id: number;
  title: string;
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
  shortInfo: string
}
