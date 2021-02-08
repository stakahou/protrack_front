import { Cell, Column } from "react-table";
import TableActions from "../../../components/tableActions";

export default [
  {
    Header: "#",
    Cell: ({ row }: Cell) => row.index + 1,
  },
  {
    Header: "Código",
    accessor: "code",
  },
  {
    Header: "Nome",
    accessor: "full_name",
  },
  {
    Header: "Projetos",
    Cell: ({ row: { original } }: Cell) => (
      <>
        {(original as any).projects.map((p: any, i: number) => (
          <p key={i}>{p.name}</p>
        ))}
      </>
    ),
  },
  {
    Header: "Alocação",
    accessor: "allocation",
  },
  {
    Header: "Ações",
    Cell: ({ row: { original } }: Cell) => (
      <TableActions
        onEdit={(original as any).actions.edit}
        onDetail={(original as any).actions.detail}
        onRemove={(original as any).actions.remove}
      />
    ),
  },
] as Column[];
