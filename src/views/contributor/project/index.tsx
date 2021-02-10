import {
  faCog,

  faProjectDiagram
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Header } from "../../../components/header";
import { Loading } from "../../../components/loading";
import { useProjectsQuery } from "../../../generated/hooks";
import { CustomCard } from "../../../styles/global";
import { Styles as ContainerStyled } from "./styles";

export const Project = () => {
  const { data, loading } = useProjectsQuery();

  const ListItems = useMemo(
    () =>
      data?.projects.map((p) => (
        <ListGroupItem
          key={p.id}
          tag={Link}
          to={`/contributor/protrack/project/${p.id}`}
          state={{ project: p }}
          action
        >
          {p.name}
        </ListGroupItem>
      )),
    [data]
  );

  return (
    <ContainerStyled>
      <Header icon={faProjectDiagram} title="PROJETOS">
        <div className="ml-auto">
          <Button color="primary" className="shadow-sm" size="sm">
            <FontAwesomeIcon icon={faCog} /> Gerenciar
          </Button>
        </div>
      </Header>

      <CustomCard>
        <CardBody className="px-0">
          <Loading loading={loading}>
            <ListGroup flush>{ListItems}</ListGroup>
          </Loading>
        </CardBody>
      </CustomCard>
    </ContainerStyled>
  );
};
