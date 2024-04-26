import { useState } from "react";
import { FormData } from "../../interfaces/UserInterfaces";
import {
  validatePhoneNumber,
  validatePassword,
  validateConfirmPassword,
  validateFullName,
  validateEmail,
} from "../../utils/validation/validation";

export const useFormRegisterValidation = (initialFormData: FormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    fullName: { isError: false, message: "" },
    email: { isError: false, message: "" },
    phoneNumber: { isError: false, message: "" },
    password: { isError: false, message: "" },
    confirmPassword: { isError: false, message: "" },
  });

  const validateForm = (formData: FormData) => {
    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneNumberError = validatePhoneNumber(formData.phoneNumber);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    setErrors({
      fullName: fullNameError,
      email: emailError,
      phoneNumber: phoneNumberError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    return (
      !fullNameError.isError &&
      !emailError.isError &&
      !phoneNumberError.isError &&
      !passwordError.isError &&
      !confirmPasswordError.isError
    );
  };

  return { formData, setFormData, errors, validateForm };
};
