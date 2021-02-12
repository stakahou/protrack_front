import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles, Scope } from "@unform/core";
import { Form as UForm } from "@unform/web";
import { forwardRef, RefObject, useEffect, useState } from "react";
import { Button, Col, FormGroup, Row } from "reactstrap";
import InputForm from "../../../../components/inputForm";
import { useValidateForm } from "../../../../hooks/useValidateForm";
import { schema } from "./schema";

interface Props {
  onSubmit: (data: FormData) => void;
  initialData?: { protracks: IField[] };
}

interface IField {
  id?: number;
  issue: string;
  description: string;
}

export const ProtrackForm = forwardRef<FormHandles, Props>(
  ({ onSubmit, initialData }, ref) => {
    const [count, setCount] = useState<number>(
      initialData?.protracks.length || 1
    );

    const { handleSubmit } = useValidateForm<any>({
      formRef: ref as RefObject<FormHandles>,
      schema,
      onSuccess: onSubmit,
    });

    const getArray = (): IField[] =>
      (ref as RefObject<FormHandles>).current?.getData().protracks;

    const setArray = (arr: IField[]) =>
      (ref as RefObject<FormHandles>).current?.setData({ protracks: arr });

    const add = () => {
      setCount((prev) => ++prev);
    };

    const remove = (index: number) => {
      setArray(getArray().filter((_, i) => i !== index));
      setCount((prev) => --prev);
    };

    return (
      <>
        <UForm ref={ref} onSubmit={handleSubmit} initialData={initialData}>
          {Array(count)
            .fill(null)
            .map((_, i) => (
              <Scope path={`protracks[${i}]`} key={i}>
                <InputForm name="id" hidden />
                <Row form key={i}>
                  <Col md={2}>
                    <FormGroup>
                      <InputForm
                        label="Issue"
                        id="issue"
                        name="issue"
                        placeholder="Issue"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <InputForm
                        label="Descrição*"
                        id="description"
                        name="description"
                        placeholder="Insira a Descrição"
                      />
                    </FormGroup>
                  </Col>
                  <Col
                    md={1}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Button
                      color="danger"
                      size="sm"
                      className="shadow-sm"
                      onClick={() => remove(i)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </Button>
                  </Col>
                </Row>
              </Scope>
            ))}
        </UForm>

        <Button color="primary" block onClick={add}>
          <FontAwesomeIcon icon={faPlus} /> Adicionar Novo
        </Button>
      </>
    );
  }
);
