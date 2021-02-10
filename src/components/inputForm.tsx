import { useField } from "@unform/core";
import { FC, useEffect, useRef } from "react";
import { Input, InputProps, Label } from "reactstrap";

interface Props extends InputProps {
  name: string;
}

const InputForm: FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Label for={fieldName}>{label}</Label>}

      <Input
        name={name}
        id={fieldName}
        innerRef={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <small>
          <strong className="text-danger">{error}</strong>
        </small>
      )}
    </>
  );
};

export default InputForm;
