import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles } from "@unform/core";
import { FC, RefObject, useRef } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { Loading } from "../../../../components/loading";
import { CustomModal, CustomModalProps } from "../../../../components/modal";
import { useUpdateProjectMutation } from "../../../../generated/hooks";
import { Project } from "../../../../generated/schemas";
import { ProjectForm } from "../form";

interface Props {
  modalRef: RefObject<CustomModalProps>;
  refetch: any;
  project?: Project;
}

export const EditProject: FC<Props> = ({ modalRef, refetch, project }) => {
  const formRef = useRef<FormHandles>(null);

  const [update, { loading }] = useUpdateProjectMutation({
    async onCompleted() {
      await refetch();
      modalRef.current?.close();
      toast.success("Projeto atualizado!");
    },
    onError(error) {
      console.log("error :>> ", error);
      toast.error("Projeto não atualizado!");
    },
  });

  const submitUpdateProject = async (data: any) => {
    update({ variables: { id: project!.id as number, data } });
  };

  return (
    <CustomModal
      withClose={false}
      backdrop="static"
      size="lg"
      ref={modalRef}
      title="Editando Projeto"
      body={
        <Loading loading={loading}>
          <ProjectForm
            ref={formRef}
            onSubmit={submitUpdateProject}
            initialData={project}
          />
        </Loading>
      }
      footer={(toggle: any) => (
        <>
          <Button
            color="primary"
            onClick={() => formRef.current?.submitForm()}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faSave} /> Atualizar
          </Button>
          <Button color="secondary" onClick={toggle} disabled={loading}>
            <FontAwesomeIcon icon={faTimes} /> Cancelar
          </Button>
        </>
      )}
    />
  );
};
