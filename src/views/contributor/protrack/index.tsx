import { faPaperPlane, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormHandles } from "@unform/core";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, CardBody } from "reactstrap";
import { Header } from "../../../components/header";
import { useProjectLazyQuery } from "../../../generated/hooks";
import { Protrack as IProtrack } from "../../../generated/schemas";
import { CustomCard } from "../../../styles/global";
import { ProtrackForm } from "./form";
import { Styles } from "./styles";

export const Protrack = () => {
  const [title, setTitle] = useState("PROTRACK");
  const [protracks, setProtracks] = useState<IProtrack[]>([]);

  const formRef = useRef<FormHandles>(null);

  const location = useLocation();

  const { projectId } = useParams();

  const [getProject, { loading }] = useProjectLazyQuery({
    onCompleted: ({ project }) => {
      setTitle(`PROTRACK | ${project.name}`);
    },
  });

  useEffect(() => {
    if (!location.state) getProject({ variables: { id: +projectId } });
  }, []);

  const submitProtrack = async (data: any) => {
    console.log("data :>> ", data);
  };

  return (
    <Styles>
      <Header icon={faTasks} title={title} />

      <CustomCard>
        <CardBody>
          <div className="text-right">
            <Button
              color="primary"
              className="mb-3"
              onClick={() => formRef.current?.submitForm()}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Enviar
            </Button>
          </div>
          <ProtrackForm
            ref={formRef}
            onSubmit={submitProtrack}
            initialData={{ protracks: [] }}
          />
        </CardBody>
      </CustomCard>
    </Styles>
  );
};
