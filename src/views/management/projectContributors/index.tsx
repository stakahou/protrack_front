import {
  faChevronLeft,
  faChevronRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import Search from "../../../components/search";
import { Shortlist, ShortlistProps } from "../../../components/shortlist";
import {
  useAddProjectContributorsMutation,
  useAllContributorsAndContributorsByProjectLazyQuery,
  useProjectLazyQuery,
  useRemoveProjectContributorsMutation,
} from "../../../generated/hooks";
import { Project } from "../../../generated/schemas";
import { CustomCard } from "../../../styles/global";
import { Styles } from "./styles";

export const ProjectContributors = () => {
  const [title, setTitle] = useState<string>("");
  const [currentProject, setCurrentProject] = useState<Partial<Project>>();
  const [leftFilter, setLeftFilter] = useState();
  const [rightFilter, setRightFilter] = useState();
  const [lists, setLists] = useState<any[]>([[], []]);

  const { state } = useLocation();
  const { projectId } = useParams();

  const listLRef = useRef<ShortlistProps>(null);
  const listRRef = useRef<ShortlistProps>(null);

  const [
    getAllContributors,
    { loading: loadingContributors },
  ] = useAllContributorsAndContributorsByProjectLazyQuery({
    onCompleted: ({ contributors, project_contributors }) => {
      const pcIds = project_contributors.map(({ id }) => id);

      setLists([
        contributors.filter(({ id }) => !pcIds.includes(id)),
        project_contributors,
      ]);
    },
  });

  const [getProject, { loading: loadingProject }] = useProjectLazyQuery({
    onCompleted: ({ project }) => setCurrentProject(project),
  });

  const [
    addContributors,
    { loading: loadingAdd },
  ] = useAddProjectContributorsMutation({
    onCompleted: ({ add_contributors }) => {
      if (add_contributors) {
        const contributors = listRRef.current!.getSelecteds();
        const ids = contributors.map(({ id }) => id);

        setLists((prev) => {
          prev[0] = prev[0].filter(({ id }: any) => !ids.includes(id));
          prev[1] = [...prev[1], ...contributors];
          return [...prev];
        });
        toast.success("Ação Realizada!");
      }
    },
    onError: () => toast.error("Ação não Realizada!"),
  });

  const [
    removeContributors,
    { loading: loadingRemove },
  ] = useRemoveProjectContributorsMutation({
    onCompleted: ({ remove_contributors }) => {
      if (remove_contributors) {
        const contributors = listLRef.current!.getSelecteds();
        const ids = contributors.map(({ id }) => id);

        setLists((prev) => {
          prev[0] = [...prev[0], ...contributors];
          prev[1] = prev[1].filter(({ id }: any) => !ids.includes(id));
          return [...prev];
        });
        toast.success("Ação Realizada!");
      }
    },
    onError: () => toast.error("Ação não Realizada!"),
  });

  useEffect(() => {
    if (!state) getProject({ variables: { id: +projectId } });
    else setCurrentProject((state as any).project);
  }, [state]);

  useEffect(() => {
    if (currentProject) {
      setTitle(`COLABORADORES | ${currentProject.name}`);
      getAllContributors({ variables: { id: currentProject.id as number } });
    }
  }, [currentProject]);

  const add = () => {
    const ids: number[] = listRRef.current!.getSelecteds().map(({ id }) => id);

    if (ids.length)
      addContributors({
        variables: {
          projectId: +projectId,
          contributorIds: ids,
        },
      });
  };

  const remove = () => {
    const ids: number[] = listLRef.current!.getSelecteds().map(({ id }) => id);

    if (ids.length)
      removeContributors({
        variables: {
          projectId: +projectId,
          contributorIds: ids,
        },
      });
  };

  return (
    <Styles>
      <Header icon={faUsers} title={title}></Header>

      <Row className="flex-grow-1">
        <Col md={5}>
          <CustomCard className="h-100">
            <CardHeader tag="h5">
              <p>Todos Colaboradores</p>
              <Search onSearch={setLeftFilter} />
            </CardHeader>
            <CardBody>
              <Shortlist
                ref={listRRef}
                itemSize={50}
                list={lists[0]}
                labelKey="full_name"
                filter={leftFilter}
              />
            </CardBody>
          </CustomCard>
        </Col>

        <Col md={2} className="d-flex flex-column justify-content-center">
          <Loading
            loading={
              loadingContributors ||
              loadingProject ||
              loadingAdd ||
              loadingRemove
            }
          >
            <div className="d-flex flex-column justify-content-center">
              <Button color="primary" className="mb-2" onClick={add}>
                Adicionar ao Projeto <FontAwesomeIcon icon={faChevronRight} />
              </Button>
              <Button color="primary" onClick={remove}>
                <FontAwesomeIcon icon={faChevronLeft} /> Remover do Projeto
              </Button>
            </div>
          </Loading>
        </Col>

        <Col md={5}>
          <CustomCard className="h-100">
            <CardHeader tag="h5">
              <p>Colaboradores Alocados</p>
              <Search onSearch={setRightFilter} />
            </CardHeader>
            <CardBody>
              <Shortlist
                ref={listLRef}
                itemSize={50}
                list={lists[1]}
                labelKey="full_name"
                filter={rightFilter}
              />
            </CardBody>
          </CustomCard>
        </Col>
      </Row>
    </Styles>
  );
};
