import { FormHandles } from "@unform/core";
import { Form as UForm } from "@unform/web";
import { forwardRef, RefObject } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import InputForm from "../../../../components/inputForm";
import { useValidateForm } from "../../../../hooks/useValidateForm";
import { schema } from "./schema";

interface Props {
  onSubmit: (data: FormData) => void;
  initialData?: any;
}

export const ContributorForm = forwardRef<FormHandles, Props>(
  ({ onSubmit, initialData }, ref) => {
    const { handleSubmit } = useValidateForm<any>({
      formRef: ref as RefObject<FormHandles>,
      schema,
      onSuccess: onSubmit,
    });

    return (
      <UForm ref={ref} onSubmit={handleSubmit} initialData={initialData}>
        <FormGroup inline>
          <InputForm label="Nome" name="full_name" disabled />
        </FormGroup>

        <Row form>
          <Col md={6}>
            <FormGroup inline>
              <InputForm
                label="Código"
                name="code"
                placeholder="Código do Colaborador"
                autoFocus
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <InputForm
                label="Alocação"
                name="allocation"
                placeholder="Alocação do Colaborador"
              />
            </FormGroup>
          </Col>
        </Row>
      </UForm>
    );
  }
);
