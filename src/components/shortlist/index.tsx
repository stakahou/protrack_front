import memoize from "memoize-one";
import {
  ComponentType,
  ElementRef,
  FC,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Scrollbars } from "react-custom-scrollbars";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  areEqual,
  FixedSizeList as List,
  FixedSizeListProps,
  ListChildComponentProps,
} from "react-window";
import { CustomInput, ListGroup, ListGroupItem } from "reactstrap";
import { time } from "uniqid";
import { normalize } from "../../helpers/string";
import { CustomScrollbarsPanel } from "./customScrollbarsPanel";
import { CustomScrollbarsVirtualList } from "./customScrollbarsVirtualList";
import { Styles } from "./styles";

interface Props extends Partial<FixedSizeListProps> {
  list: any[];
  labelKey?: string;
  filter?: string;
}

export interface IListItem {
  value: any;
  selected: boolean;
  index: number;
}

type FRType = {
  getSelecteds: () => any[];
};

export type ShortlistProps = ElementRef<typeof Shortlist>;

export const Shortlist = forwardRef<FRType, Props>(
  ({ list, labelKey, filter, ...props }, ref) => {
    const listRef = useRef<any>();
    const outerRef = useRef<Scrollbars>();

    const [items, setItems] = useState<IListItem[]>([]);

    useImperativeHandle(ref, () => ({
      getSelecteds: () =>
        items.filter(({ selected }) => selected).map(({ value }) => value),
    }));

    useEffect(
      () =>
        setItems(
          list.map((i, index) => ({ index, value: i, selected: false }))
        ),
      [list]
    );

    const toggleItemSelect = (index: number) =>
      setItems((prev) => {
        const item = prev[index];
        const items = [...prev];
        items[index] = { ...item, selected: !item.selected };
        return items;
      });

    const ListGroupWrapper: FC = ({ children, ...props }) => (
      <ListGroup flush {...props}>
        {children}
      </ListGroup>
    );

    const Row: ComponentType<ListChildComponentProps> = memo(
      ({ data, index, style }) => {
        const { items, toggleItemSelect } = data;
        const item = items[index];

        return (
          <ListGroupItem
            action
            tag="button"
            active={item.selected}
            onClick={() => toggleItemSelect(item.index)}
            style={{ ...style, zIndex: 0 }}
          >
            <CustomInput
              id={time()}
              type="checkbox"
              label={String(labelKey ? item.value[labelKey] : item.value)}
              checked={item.selected}
              readOnly
            />
          </ListGroupItem>
        );
      },
      areEqual
    );

    const createItemData = memoize((items, toggleItemSelect) => ({
      items,
      toggleItemSelect,
    }));

    const itemData = createItemData(items, toggleItemSelect);

    const data = useMemo(() => {
      if (!filter) return itemData;

      const value = normalize(filter);

      return Object.assign(itemData, {
        items: itemData.items.filter((i: any) =>
          normalize(labelKey ? i.value[labelKey] : i.value).includes(value)
        ),
      });
    }, [itemData, filter]);

    return (
      <Styles>
        <CustomScrollbarsPanel items={items} change={setItems} />
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={listRef}
              className="List"
              outerElementType={CustomScrollbarsVirtualList}
              outerRef={outerRef}
              innerElementType={ListGroupWrapper}
              height={height - 24}
              width={width}
              itemData={data}
              itemCount={data.items.length}
              itemSize={50}
              {...props}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </Styles>
    );
  }
);
