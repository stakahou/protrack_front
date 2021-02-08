import { forwardRef } from "react";
import Scrollbars, { ScrollbarProps } from "react-custom-scrollbars";

export const CustomScrollbars = forwardRef<Scrollbars, ScrollbarProps>(
  ({ onScroll, style, children }, ref) => {
    return (
      <Scrollbars
        ref={ref}
        style={{ ...style, overflow: "hidden" }}
        onScroll={onScroll}
      >
        {children}
      </Scrollbars>
    );
  }
);
