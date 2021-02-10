import React, { memo, PropsWithChildren, useContext } from "react";
import { LoaderHeightWidthRadiusProps } from "react-spinners/interfaces";
import ScaleLoader from "react-spinners/ScaleLoader";
import { DefaultTheme, ThemeContext } from "styled-components";

interface Props extends LoaderHeightWidthRadiusProps {
  loading?: boolean;
}

export const Loading: React.FC<PropsWithChildren<Props>> = memo(
  ({ loading, children, ...props }) => {
    const defaultTheme = useContext<DefaultTheme>(ThemeContext);

    return (
      <>
        <ScaleLoader
          loading={loading}
          color={defaultTheme.colors.primary}
          {...props}
        />

        <div hidden={loading}>{children}</div>
      </>
    );
  }
);

Loading.defaultProps = {
  loading: true,
  height: 35,
  width: 4,
  radius: 2,
  margin: 2,
  css: `
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  `,
};
