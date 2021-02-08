import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { CardBody } from "reactstrap";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { CardStyled } from "./styles";

interface Props {
  icon: IconProp;
  title: string;
}

export const Header: FC<Props> = ({ title, icon, children }) => {
  useDocumentTitle(title);

  return (
    <CardStyled className="mb-3">
      <CardBody className="d-flex align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={icon} className="mr-2" size="2x" />
            <h5 className="h5 mb-0">{title}</h5>
          </div>
        </div>
        {children}
      </CardBody>
    </CardStyled>
  );
};
