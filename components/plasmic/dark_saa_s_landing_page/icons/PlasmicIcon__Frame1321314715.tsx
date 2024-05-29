// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1321314715IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1321314715Icon(props: Frame1321314715IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 560 341"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"357.5"}
        cy={"170.5"}
        r={"170.5"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Frame1321314715Icon;
/* prettier-ignore-end */
