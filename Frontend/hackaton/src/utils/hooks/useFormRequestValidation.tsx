import { useState } from "react";
import { UserCreateRequestData } from "../../interfaces/UserInterfaces";
import {
  validateTitle,
  validateTerm,
  validateTag,
  validateDescription,
  validateAddress,
} from "../../utils/validation/validation";

export const useFormRequestValidation = (
  initialFormData: UserCreateRequestData
) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    title: { isError: false, message: "" },
    address: { isError: false, message: "" },
    term: { isError: false, message: "" },
    tag: { isError: false, message: "" },
    description: { isError: false, message: "" },
  });

  const validateForm = (formData: UserCreateRequestData) => {
    const titleError = validateTitle(formData.title);
    const addressError = validateAddress(formData.address);
    const termError = validateTerm(formData.term);
    const tagError = validateTag(formData.tag);
    const descriptionError = validateDescription(formData.description);

    setErrors({
      title: titleError,
      address: addressError,
      term: termError,
      tag: tagError,
      description: descriptionError,
    });

    return (
      !titleError.isError &&
      !addressError.isError &&
      !termError.isError &&
      !tagError.isError &&
      !descriptionError.isError
    );
  };

  return { formData, setFormData, errors, validateForm };
};
