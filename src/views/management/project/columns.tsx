import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cell, Column } from "react-table";
import { Button } from "reactstrap";
import TableActions from "../../../components/tableActions";

export default [
  {
    Header: "#",
    Cell: ({ row }: Cell) => row.index + 1,
  },
  {
    Header: "Nome",
    accessor: "name",
  },
  {
    Header: "Ações",
    Cell: ({ row: { original } }: Cell) => (
      <TableActions
        onEdit={(original as any).actions.edit}
        onDetail={(original as any).actions.detail}
        onRemove={(original as any).actions.remove}
      >
        <Button
          size="sm"
          color="light"
          className="mx-1 shadow"
          onClick={(original as any).actions.members}
        >
          <FontAwesomeIcon icon={faUsers} color="#146c43" />
        </Button>
      </TableActions>
    ),
  },
] as Column[];
