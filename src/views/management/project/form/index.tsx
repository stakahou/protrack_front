import { FormHandles } from "@unform/core";
import { Form as UForm } from "@unform/web";
import { forwardRef, RefObject } from "react";
import { FormGroup } from "reactstrap";
import InputForm from "../../../../components/inputForm";
import { useValidateForm } from "../../../../hooks/useValidateForm";
import { schema } from "./schema";

interface Props {
  onSubmit: (data: FormData) => void;
  initialData?: any;
}

export const ProjectForm = forwardRef<FormHandles, Props>(
  ({ onSubmit, initialData }, ref) => {
    const { handleSubmit } = useValidateForm<any>({
      formRef: ref as RefObject<FormHandles>,
      schema,
      onSuccess: onSubmit,
    });

    return (
      <UForm ref={ref} onSubmit={handleSubmit} initialData={initialData}>
        <FormGroup>
          <InputForm
            label="Nome do Projeto"
            id="name"
            name="name"
            placeholder="Nome do Projeto"
            autoFocus
          />
        </FormGroup>
      </UForm>
    );
  }
);
