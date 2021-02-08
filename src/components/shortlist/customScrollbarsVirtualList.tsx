import { forwardRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { CustomScrollbars } from "./customScrollbars";

export const CustomScrollbarsVirtualList = forwardRef<Scrollbars, any>(
  (props, ref) => <CustomScrollbars {...props} ref={ref} />
);
