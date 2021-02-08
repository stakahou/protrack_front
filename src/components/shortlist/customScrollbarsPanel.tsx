import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { CustomInput } from "reactstrap";
import { time } from "uniqid";
import { IListItem } from ".";

interface Props {
  items: IListItem[];
  change: Dispatch<SetStateAction<IListItem[]>>;
}

export const CustomScrollbarsPanel: FC<Props> = ({ items, change }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const checkboxHandle = (event: ChangeEvent<HTMLInputElement>) => {
    change((prev) =>
      prev.map((e) => ({ ...e, selected: event.target.checked }))
    );
  };

  const selecteds = useMemo(() => items.filter((e) => e.selected).length, [
    items,
  ]);

  useEffect(() => {
    if (selecteds > 0 && selecteds < items.length)
      inputRef.current!.indeterminate = true;
    else {
      inputRef.current!.indeterminate = false;
      if (!selecteds) inputRef.current!.checked = false;
      else inputRef.current!.checked = true;
    }
  }, [items]);

  return (
    <div className="panel d-flex justify-content-between mb-1">
      <CustomInput
        className="text-muted"
        id={time()}
        type="checkbox"
        label={`${selecteds} Selecionado(s)`}
        onChange={checkboxHandle}
        innerRef={inputRef}
      />
    </div>
  );
};
