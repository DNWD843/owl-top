import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export const enum TagSize {
  small = 'small',
  medium = 'medium',
}

export const enum TagColors {
  ghost = 'ghost',
  red = 'red',
  grey = 'grey',
  green = 'green',
  primary = 'primary',
}

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: keyof typeof TagSize,
  children: ReactNode,
  className?: string,
  color?: keyof typeof TagColors,
  href?: string,
}
