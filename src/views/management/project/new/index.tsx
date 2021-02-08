import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles } from "@unform/core";
import { FC, RefObject, useRef } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { Loading } from "../../../../components/loading";
import { CustomModal, CustomModalProps } from "../../../../components/modal";
import { useCreateProjectMutation } from "../../../../generated/hooks";
import { ProjectForm } from "../form";

interface Props {
  modalRef: RefObject<CustomModalProps>;
  refetch: any;
}

export const NewProject: FC<Props> = ({ modalRef, refetch }) => {
  const formRef = useRef<FormHandles>(null);

  const [create, { loading }] = useCreateProjectMutation({
    async onCompleted() {
      await refetch();
      modalRef.current?.close();
      toast.success("Projeto adicionado!");
    },
    onError(error) {
      console.log("error :>> ", error);
      toast.error("Projeto não adicionado!");
    },
  });

  const submitNewProject = async (data: any) => {
    create({ variables: { data } });
  };

  return (
    <CustomModal
      withClose={false}
      backdrop="static"
      size="lg"
      ref={modalRef}
      title="Novo Projeto"
      body={
        <Loading loading={loading}>
          <ProjectForm ref={formRef} onSubmit={submitNewProject} />
        </Loading>
      }
      footer={(toggle: any) => (
        <>
          <Button
            color="primary"
            onClick={() => formRef.current?.submitForm()}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faSave} /> Salvar
          </Button>
          <Button color="secondary" onClick={toggle} disabled={loading}>
            <FontAwesomeIcon icon={faTimes} /> Cancelar
          </Button>
        </>
      )}
    />
  );
};
