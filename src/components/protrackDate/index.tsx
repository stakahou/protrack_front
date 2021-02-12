import moment, { Moment, weekdays } from "moment";
import { FC, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Styles } from "./styles";

interface Props {
  week?: number;
  weekChange: (week: number, date: Date) => void;
  selected: Date;
  inline?: boolean;
}

export const ProtrackDate: FC<Props> = ({
  weekChange,
  week,
  selected,
  ...props
}) => {
  const [highlightDates, setHighlightDates] = useState<Date[]>([]);

  const weekRange = useRef<any>({});

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const dayClassName = (date: any) => {
    const { from, to } = weekRange?.current;
    if (date >= from && date <= to) return "weekhover";
    return null;
  };

  const getWeekRange = (date: Date) => {
    return {
      from: moment(date).startOf("week").toDate(),
      to: moment(date).endOf("week").toDate(),
    };
  };

  const onDayMouseEnter = (date: Date) =>
    (weekRange.current = getWeekRange(date));

  const onMonthMouseLeave = () => (weekRange.current = {});

  const onWeekSelect = (date: Date) => {
    console.log("date :>> ", date);
  };

  const getWeekDays = (moment: Moment) =>
    weekdays().map((dw: string) => moment.day(dw).toDate());

  const onChange = (date: Date) => {
    setHighlightDates(getWeekDays(moment(date)));
    weekChange(moment(date).week(), date);
  };

  useEffect(() => {
    const currentMoment = week ? moment(selected).week(week) : moment();

    setHighlightDates(getWeekDays(currentMoment));
  }, []);

  return (
    <Styles>
      <DatePicker
        selected={selected}
        onChange={onChange}
        filterDate={isWeekday}
        dayClassName={dayClassName}
        disabledKeyboardNavigation
        highlightDates={highlightDates}
        onDayMouseEnter={onDayMouseEnter}
        onMonthMouseLeave={onMonthMouseLeave}
        onWeekSelect={onWeekSelect}
        {...props}
      />
    </Styles>
  );
};
