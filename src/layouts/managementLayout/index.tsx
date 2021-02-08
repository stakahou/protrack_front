import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import { INavBarLink } from "../../shared/interfaces";
import { NavBar } from "../navBar";
import { Styles } from "./styles";

export const ManagementLayout: FC = () => {
  const links: INavBarLink[] = [
    {
      to: "/management/projects",
      label: "Projetos",
    },
    {
      to: "/management/contributors",
      label: "Colaboradores",
    },
    {
      to: "/management/protracks",
      label: "Protracks",
    },
  ];

  return (
    <Styles>
      <NavBar links={links} />
      <Container className="p-5 d-flex flex-column flex-grow-1" fluid>
        <Outlet />
      </Container>
    </Styles>
  );
};
