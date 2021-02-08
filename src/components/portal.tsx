import { FC } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "../hooks/usePortal";

interface Props {
  id: string;
}

export const Portal: FC<Props> = ({ id, children }) => {
  const target = usePortal(id);

  return createPortal(children, target);
};
