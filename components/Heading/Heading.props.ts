import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export const enum HeadingTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
}

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  type?: keyof typeof HeadingTypes;
  children: ReactNode,
  className?: string,
}
