import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export const enum ParagraphTypes {
  p1 = 'p1',
  p2 = 'p2',
  p3 = 'p3',
}

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  type?: keyof typeof ParagraphTypes,
  children: ReactNode,
  className?: string,
}
