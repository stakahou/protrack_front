import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText as IGT,
} from "reactstrap";
import styled from "styled-components";

const InputGroupText = styled(IGT)`
  border: 1px solid ${(props) => props.theme.colors.primary};

  * {
    color: white !important;
  }
`;

export function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  const count = preFilteredRows.length;

  return (
    <InputGroup size="sm">
      <Input
        type="search"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Buscar ${count} resultados...`}
        className="bg-light border-0 shadow-sm"
      />
      <InputGroupAddon addonType="append" className="shadow-sm">
        <InputGroupText className="bg-primary text-white">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
