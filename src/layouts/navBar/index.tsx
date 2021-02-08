import { faDoorOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink as RNavLink,
} from "reactstrap";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useStores } from "../../hooks/useStores";
import { INavBarLink } from "../../shared/interfaces";
import { Styles } from "./styles";

const { REACT_APP_CLIENT_ID }: any = process.env;

interface Props {
  links: INavBarLink[];
}

export const NavBar: FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [, , clear] = useLocalStorage("@session");

  const { sessionStore } = useStores();

  const navigate = useNavigate();

  const Links = useMemo(
    () =>
      links.map(({ label, to }, i) => (
        <NavItem key={i}>
          <RNavLink tag={NavLink} to={to}>
            {label}
          </RNavLink>
        </NavItem>
      )),
    [links]
  );

  const logout = () => {
    clear();
    sessionStore.setAsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Styles>
      <Navbar color="dark" dark expand="md" className="shadow">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faHome} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {Links}
          </Nav>
          <GoogleLogout
            clientId={REACT_APP_CLIENT_ID}
            onLogoutSuccess={logout}
            render={(props) => (
              <Button {...props}>
                <FontAwesomeIcon icon={faDoorOpen} color="white" />
              </Button>
            )}
          />
        </Collapse>
      </Navbar>
    </Styles>
  );
};
