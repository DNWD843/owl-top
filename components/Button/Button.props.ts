import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode,
  appearance: 'primary' | 'ghost',
  className?: string,
  hasArrowIcon?: boolean,
  arrowDirection?: 'down' | 'right'
}

