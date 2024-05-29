// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmallIconIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmallIconIconIcon(props: SmallIconIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.148 4.898l-3.75 3.75a.563.563 0 01-.797 0l-3.75-3.75a.563.563 0 01.797-.797L6 7.453l3.352-3.352a.563.563 0 11.797.796l-.001.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmallIconIconIcon;
/* prettier-ignore-end */
