import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";

const TableActions: React.FC<{
  onEdit?: any;
  onRemove?: any;
  onDetail?: any;
}> = ({ onEdit, onRemove, onDetail, children }) => {
  return (
    <div>
      {onDetail && (
        <Button
          color="light"
          size="sm"
          onClick={onDetail}
          className="mx-1 shadow"
        >
          <FontAwesomeIcon icon={faEye} color="#3dd5f3" />
        </Button>
      )}
      {onEdit && (
        <Button
          color="light"
          size="sm"
          onClick={onEdit}
          className="mx-1 shadow"
        >
          <FontAwesomeIcon icon={faPen} color="#ffc107" />
        </Button>
      )}
      {children}
      {onRemove && (
        <Button
          size="sm"
          color="light"
          onClick={onRemove}
          className="mx-1 shadow"
        >
          <FontAwesomeIcon icon={faTrash} color="#dc3545" />
        </Button>
      )}
    </div>
  );
};

export default TableActions;
