import { faPlus, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CardBody } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import { CustomModalProps } from "../../../components/modal";
import ReactTable from "../../../components/table";
import { useProjectsQuery } from "../../../generated/hooks";
import { Project as IProject } from "../../../generated/schemas";
import { CustomCard } from "../../../styles/global";
import columns from "./columns";
import { EditProject } from "./edit";
import { NewProject } from "./new";
import { Styles } from "./styles";

export const Project = () => {
  const modalNewRef = useRef<CustomModalProps>(null);

  const modalEditRef = useRef<CustomModalProps>(null);

  const [selectedProjet, setSelectedProjet] = useState<IProject>();

  const navigate = useNavigate();

  const { data, loading, refetch } = useProjectsQuery({
    fetchPolicy: "no-cache",
  });

  const projects = useMemo(
    () =>
      (data?.projects ?? [])
        .map((p: any) => ({
          ...p,
          actions: {
            edit: () => {
              setSelectedProjet(p);
              modalEditRef.current?.open();
            },
            members: () => {
              navigate(`/management/projects/${p.id}/contributors`, {
                state: { project: p },
              });
            },
            // remove: () => console.log("remove :>> ", p.id),
            // detail: () => console.log("detail :>> ", p.id),
          },
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [data]
  );

  return (
    <Styles>
      <Header icon={faProjectDiagram} title="PROJETOS">
        <div className="ml-auto">
          <Button
            color="primary"
            className="shadow-sm"
            size="sm"
            onClick={() => modalNewRef.current?.open()}
          >
            <FontAwesomeIcon icon={faPlus} /> Novo
          </Button>
        </div>
      </Header>

      <CustomCard>
        <CardBody>
          <Loading loading={loading}>
            <ReactTable columns={columns} data={projects} />
          </Loading>
        </CardBody>
      </CustomCard>

      <NewProject modalRef={modalNewRef} refetch={refetch} />

      <EditProject
        modalRef={modalEditRef}
        project={selectedProjet}
        refetch={refetch}
      />
    </Styles>
  );
};
