import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles } from "@unform/core";
import { FC, RefObject, useRef } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { Loading } from "../../../../components/loading";
import { CustomModal, CustomModalProps } from "../../../../components/modal";
import { useUpdateContributorMutation } from "../../../../generated/hooks";
import { User } from "../../../../generated/schemas";
import { ContributorForm } from "../form";

interface Props {
  modalRef: RefObject<CustomModalProps>;
  refetch: any;
  contributor?: User;
}

export const EditContributor: FC<Props> = ({
  modalRef,
  refetch,
  contributor,
}) => {
  const formRef = useRef<FormHandles>(null);

  const [update, { loading }] = useUpdateContributorMutation({
    async onCompleted() {
      await refetch();
      modalRef.current?.close();
      toast.success("Colaborador atualizado!");
    },
    onError(error) {
      console.log("error :>> ", error);
      toast.error("Colaborador não atualizado!");
    },
  });

  const submitUpdateContributor = async ({ allocation, code }: any) => {
    update({
      variables: { id: contributor!.id as number, data: { allocation, code } },
    });
  };

  return (
    <CustomModal
      withClose={false}
      backdrop="static"
      size="lg"
      ref={modalRef}
      title="Editando Colaborador"
      body={
        <Loading loading={loading}>
          <ContributorForm
            ref={formRef}
            onSubmit={submitUpdateContributor}
            initialData={contributor}
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
