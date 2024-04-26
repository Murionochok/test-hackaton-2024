const nameRegex = /^[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+(?: [А-ЯІЇЄҐA-Z][а-яіїєґa-z]+)+$/;
export const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

interface ValidationResponse {
  isError: boolean;
  message: string;
}

export const validateFullName = (fullName: string): ValidationResponse => {
  if (!fullName.trim()) {
    return { isError: true, message: "Enter your full name." };
  }

  // Basic name validation (can be enhanced)
  const nameParts = fullName.trim().split(/\s+/); // Split on whitespace
  if (nameParts.length < 2) {
    return {
      isError: true,
      message: "Full name must include first and last name.",
    };
  }

  // Optional: More comprehensive name validation
  // (e.g., check for special characters, non-breaking spaces, etc.)
  if (!nameRegex.test(fullName)) {
    return {
      isError: true,
      message:
        "First name cannot contain special characters such as numbers or symbols.",
    };
  }

  return { isError: false, message: "" };
};

export const validateEmail = (email: string): ValidationResponse => {
  if (!email.trim()) {
    return { isError: true, message: "Enter your email address." };
  }

  // Basic email format validation (can be enhanced)
  if (!emailRegex.test(email)) {
    return {
      isError: true,
      message: "Invalid email address. Please enter a valid email.",
    };
  }

  return { isError: false, message: "" };
};

export const validatePhoneNumber = (
  phoneNumber: string | undefined
): ValidationResponse => {
  if (!phoneNumber || phoneNumber.trim().length === 0) {
    return { isError: true, message: "Enter a phone number" };
  }

  const isValidPhoneNumber = phoneNumberRegex.test(phoneNumber);
  if (!isValidPhoneNumber || phoneNumber.length < 10) {
    return { isError: true, message: "Entered number is not valid" };
  }

  return { isError: false, message: "" };
};

export const validatePassword = (password: string): ValidationResponse => {
  if (!password.trim()) {
    return { isError: true, message: "Enter a password" };
  } else if (!passwordRegex.test(password)) {
    return {
      isError: true,
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    };
  }

  return { isError: false, message: "" };
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): ValidationResponse => {
  if (!confirmPassword.trim()) {
    return { isError: true, message: "Confirm the password" };
  }
  if (password !== confirmPassword) {
    return { isError: true, message: "Passwords do not match" };
  }

  return { isError: false, message: "" };
};
