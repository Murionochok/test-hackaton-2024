export type UserI = {
  loading?: boolean;
  user: {
    isAuthenticated?: boolean | undefined;
    name?: string | undefined;
    surname?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
  };
  error?: string;
};
