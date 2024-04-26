import { useState } from "react";
import { FormData } from "../../interfaces/UserInterfaces";
import {
  validateFirstName,
  validateLastName,
  validatePhoneNumber,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation/validation"

export const useFormRegisterValidation = (initialFormData: FormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    firstName: { isError: false, message: "" },
    lastName: { isError: false, message: "" },
    phoneNumber: { isError: false, message: "" },
    password: { isError: false, message: "" },
    confirmPassword: { isError: false, message: "" },
  });

  const validateForm = (formData: FormData) => {
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);
    const phoneNumberError = validatePhoneNumber(formData.phoneNumber);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      phoneNumber: phoneNumberError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    return (
      !firstNameError.isError &&
      !lastNameError.isError &&
      !phoneNumberError.isError &&
      !passwordError.isError &&
      !confirmPasswordError.isError
    );
  };

  return { formData, setFormData, errors, validateForm };
};
