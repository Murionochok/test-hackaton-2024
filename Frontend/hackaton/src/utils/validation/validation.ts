const nameRegex = /^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*$/;
const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

interface ValidationResponse {
  isError: boolean;
  message: string;
}

export const validateAge = (age: number): ValidationResponse => {
  if (isNaN(age) || age < 0) {
    return { isError: true, message: "Age must be a positive number." };
  }
  // Optional: Add checks for maximum age if needed
  // (e.g., if (age > 120) { ... })

  return { isError: false, message: "" };
};

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

  return { isError: false, message: "" };
};

export const validateFirstName = (firstName: string): ValidationResponse => {
  if (!firstName.trim()) {
    return { isError: true, message: "Enter the value" };
  } else if (firstName.trim().length < 4 || firstName.trim().length > 16) {
    return { isError: true, message: "Enter a value between 4 and 16 symbols" };
  } else if (!nameRegex.test(firstName)) {
    return {
      isError: true,
      message:
        "First name cannot contain special characters such as numbers or symbols.",
    };
  }

  return { isError: false, message: "" };
};

export const validateLastName = (lastName: string): ValidationResponse => {
  if (!lastName.trim()) {
    return { isError: false, message: "" };
  }
  if (lastName.trim().length < 4 || lastName.trim().length > 16) {
    return { isError: true, message: "Enter a value between 4 and 16 symbols" };
  } else if (!nameRegex.test(lastName)) {
    return {
      isError: true,
      message:
        "Last name cannot contain special characters such as numbers or symbols.",
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
