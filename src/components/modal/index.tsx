import {
  ElementRef,
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useState,
} from "react";
import { ModalBody, ModalFooter, ModalHeader, ModalProps } from "reactstrap";
import { Styles as ModalStyled } from "./styles";

interface Props extends ModalProps {
  title?: string;
  body?: ReactElement;
  footer?: (toggle: () => void) => ReactElement;
  withClose: boolean;
}

type FRType = {
  open: () => void;
  close: () => void;
};

export type CustomModalProps = ElementRef<typeof CustomModal>;

export const CustomModal = forwardRef<FRType, Props>(
  ({ children, body, footer, title, withClose = true, ...props }, ref) => {
    const [modal, setModal] = useState<boolean>(false);

    const toggle = () => setModal(!modal);

    useImperativeHandle(ref, () => ({
      open: () => setModal(true),
      close: () => setModal(false),
    }));

    return (
      <ModalStyled isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={withClose ? toggle : undefined}>
          {title}
        </ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer && footer(toggle)}</ModalFooter>
      </ModalStyled>
    );
  }
);
