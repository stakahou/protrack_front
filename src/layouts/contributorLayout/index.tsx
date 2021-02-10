import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import { INavBarLink } from "../../shared/interfaces";
import { NavBar } from "../navBar";
import { Styles } from "./styles";

export const ContributorLayout: FC = () => {
  const links: INavBarLink[] = [];

  return (
    <Styles>
      <NavBar links={links} />
      <Container className="p-5 d-flex flex-column flex-grow-1" fluid>
        <Outlet />
      </Container>
    </Styles>
  );
};
