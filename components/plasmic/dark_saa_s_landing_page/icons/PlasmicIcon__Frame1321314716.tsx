// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1321314716IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1321314716Icon(props: Frame1321314716IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 560 189"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"50"} cy={"139"} r={"50"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame1321314716Icon;
/* prettier-ignore-end */
