import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import { OptionTypeBase } from "react-select";
import { CardBody } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import { ReactSelect } from "../../../components/reactSelect";
import {
  OnProtrackAddedDocument,
  useAllContributorsProtracksByProjectLazyQuery,
  useProjectsQuery,
} from "../../../generated/hooks";
import { CustomCard } from "../../../styles/global";
import { ContributorProtacks } from "./components/contributorProtacks";
import { Styles } from "./styles";

export const Protrack = () => {
  const [currentProject, setCurrentProject] = useState<OptionTypeBase>();

  const { data, loading: projectsLoading } = useProjectsQuery();

  const [
    getProtracks,
    { loading, data: protracks, subscribeToMore },
  ] = useAllContributorsProtracksByProjectLazyQuery({
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (subscribeToMore && currentProject) {
      console.log("aqui");
      subscribeToMore({
        document: OnProtrackAddedDocument,
        variables: { projectId: currentProject.value },
        updateQuery: (prev, { subscriptionData }: any) => {
          console.log("subscriptionData :>> ", subscriptionData);
          console.log("prev :>> ", prev);
          if (!subscriptionData.data?.protrackAdded) return prev;

          const { user, ...protrack } = subscriptionData.data.protrackAdded;

          return Object.assign({}, prev, {
            project_contributors: [
              ...prev.project_contributors.map((c) => {
                if (c.id === user.id)
                  return { ...c, protracks: [...c.protracks, protrack] };
                return c;
              }),
            ],
          });
        },
      });
    }

    return () => {};
  }, [subscribeToMore, currentProject]);

  useEffect(() => {
    if (currentProject) {
      getProtracks({ variables: { id: currentProject.value } });
    }
  }, [currentProject]);

  const options = useMemo<OptionTypeBase[]>(
    () =>
      (data?.projects ?? [])
        .map(({ id, name }) => ({
          value: id,
          label: name,
        }))
        .sort((a: any, b: any) => b.label - a.label),
    [data]
  );

  const ProtracksCard = useMemo(
    () =>
      protracks?.project_contributors.map((protrack) => {
        return (
          <CustomCard className="mb-3" key={protrack.id}>
            <CardBody>
              <ContributorProtacks protrack={protrack} />
            </CardBody>
          </CustomCard>
        );
      }),
    [protracks]
  );

  return (
    <Styles>
      <Header icon={faTasks} title="PROTRACKS"></Header>

      <ReactSelect
        isLoading={projectsLoading}
        options={options}
        placeholder="Selecione um Projeto"
        className="react-select-container mb-5"
        classNamePrefix="react-select"
        onChange={setCurrentProject}
      />

      <Loading loading={loading}>
        <p className="h5 text-muted">Colaboradores</p>
        {ProtracksCard}
      </Loading>
    </Styles>
  );
};
