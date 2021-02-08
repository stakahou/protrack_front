import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { fromEvent, of, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import styled from "styled-components";

const Styles = styled.div`
  .navbar-search {
    width: 25rem;

    input {
      font-size: 0.85rem;
      height: auto;
    }
  }

  .input-group-append {
    span {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

interface Props {
  onSearch: any;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    let subscription: Subscription;

    if (onSearch) {
      subscription = fromEvent(inputRef.current, "input")
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((event: any) => of(event.target.value))
        )
        .subscribe(onSearch);
    }

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [onSearch]);

  return (
    <Styles>
      <InputGroup className="navbar-search shadow-sm w-100">
        <Input
          innerRef={inputRef}
          className="form-control bg-white border-0 "
          placeholder="Pesquisar..."
        />
        <InputGroupAddon addonType="append" className="shadow-sm">
          <InputGroupText>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Styles>
  );
};

export default Search;
