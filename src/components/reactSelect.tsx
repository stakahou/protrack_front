import React, { forwardRef, ForwardRefRenderFunction, useContext } from "react";
import Select, { OptionTypeBase, Props as SelectProps } from "react-select";
import styled, { DefaultTheme, ThemeContext } from "styled-components";

const Styles = styled.div`
  .react-select-container {
    box-shadow: ${({ theme }) => theme.shadows.default} !important;

    .react-select__control {
      border: 0;
    }

    .react-select__menu {
      .react-select__menu-list {
        .react-select__option {
          &.react-select__option--is-focused {
            color: white;
          }
          :hover {
            color: white;
          }
        }
      }
    }
  }
`;

export const ReactSelect = forwardRef<any, SelectProps<OptionTypeBase>>(
  (props, ref) => {
    const defaultTheme = useContext<DefaultTheme>(ThemeContext);

    return (
      <Styles>
        <Select
          ref={ref}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: defaultTheme.colors.primary,
              primary: defaultTheme.colors.primary,
            },
          })}
          {...props}
        />
      </Styles>
    );
  }
);
