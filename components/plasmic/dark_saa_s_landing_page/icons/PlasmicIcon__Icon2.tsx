// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.25 4C19.669 4 17.409 5.11 16 6.986 14.591 5.11 12.331 4 9.75 4A7.759 7.759 0 002 11.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 00.948 0C17.026 27.582 30 20.5 30 11.75A7.759 7.759 0 0022.25 4zM16 25.85c-2.283-1.33-12-7.389-12-14.1A5.757 5.757 0 019.75 6c2.431 0 4.473 1.295 5.325 3.375a1 1 0 001.85 0C17.777 7.291 19.819 6 22.25 6A5.757 5.757 0 0128 11.75c0 6.701-9.72 12.769-12 14.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
