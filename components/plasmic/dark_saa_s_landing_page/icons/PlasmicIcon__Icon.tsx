// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zM7.5 10.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm9.75 0a.75.75 0 01-.75.75h-2.25a.75.75 0 110-1.5h2.25a.75.75 0 01.75.75zm-.851 4.5C15.434 16.293 13.83 17.25 12 17.25s-3.434-.956-4.4-2.625a.75.75 0 011.3-.75c.7 1.21 1.8 1.875 3.1 1.875s2.4-.666 3.101-1.875a.75.75 0 111.298.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
