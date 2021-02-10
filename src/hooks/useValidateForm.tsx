import { FormHandles, SubmitHandler } from "@unform/core";
import { RefObject, useCallback, useState } from "react";
import { ObjectSchema, ValidationError } from "yup";

type Hook = <T>(
  args: Props<T>
) => {
  validating: boolean;
  handleSubmit: SubmitHandler<T>;
};

interface Props<T> {
  formRef: RefObject<FormHandles>;
  schema: ObjectSchema<any>;
  onSuccess: (data: T) => void;
}

export const useValidateForm: Hook = ({ formRef, schema, onSuccess }) => {
  const [validating, setValidating] = useState(false);

  const success = useCallback(onSuccess, []);

  const handleSubmit = useCallback(
    async (data) => {
      formRef?.current?.setErrors({});
      try {
        setValidating(true);
        const _data: any = await schema.validate(data, { abortEarly: false });
        success(_data);
      } catch (err) {
        console.log("err :>> ", err);

        const validationErrors: any = {};

        if (err instanceof ValidationError) {
          err.inner.forEach((error) => {
            error.path && (validationErrors[error.path] = error.message);
          });

          formRef?.current?.setErrors(validationErrors);
        }
      } finally {
        setValidating(false);
      }
    },
    [formRef, schema, success]
  );

  return {
    handleSubmit,
    validating,
  };
};
