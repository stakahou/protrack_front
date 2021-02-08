import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useMemo } from "react";
import {
  TableInstance,
  TableState,
  useFilters,
  usePagination,
  UsePaginationInstanceProps,
  useTable,
} from "react-table";
import {
  Alert,
  Button,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Table,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { Styles } from "./style";
import { DefaultColumnFilter } from "./utils";

function ReactTable({ columns, data }: any) {
  const defaultColumn = useMemo<any>(
    () => ({ Filter: DefaultColumnFilter }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    rows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      } as TableState<object>,
    },
    useFilters,
    usePagination
  ) as TableInstance<any> & UsePaginationInstanceProps<any>;

  return (
    <Styles>
      <Table {...getTableProps()} striped responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {!rows.length ? (
        <Alert className="mt-3 shadow-sm text-center" color="light">
          <span className="fas fa-info-circle" /> Nenhum Resultado!
        </Alert>
      ) : (
        <div className="pagination w-100 mt-3 d-flex justify-content-center">
          <ButtonGroup size="sm">
            <Button
              color="primary"
              className="fas fa-angle-double-left"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon className="icon" icon={faAngleDoubleLeft} />
            </Button>
            <Button
              color="primary"
              className="fas fa-angle-left"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon className="icon" icon={faAngleLeft} />
            </Button>

            <Button color="light" disabled={true}>
              Página{" "}
              <strong>
                {(state as any).pageIndex + 1} de {pageOptions.length}
              </strong>
            </Button>

            <UncontrolledButtonDropdown size="sm">
              <DropdownToggle caret color="primary">
                Mostrar {(state as any).pageSize}
              </DropdownToggle>
              <DropdownMenu>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <DropdownItem
                    key={pageSize}
                    onClick={() => setPageSize(Number(pageSize))}
                  >
                    Mostrar {pageSize}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <div>
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light rounded-0">
                    Ir para
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Ir para"
                  type="number"
                  defaultValue={(state as any).pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  style={{ width: "100px" }}
                  className="rounded-0"
                />
              </InputGroup>
            </div>

            <Button
              color="primary"
              className="fas fa-angle-right"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon className="icon" icon={faAngleRight} />
            </Button>
            <Button
              color="primary"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
            </Button>
          </ButtonGroup>
        </div>
      )}
    </Styles>
  );
}

export default memo(ReactTable);
