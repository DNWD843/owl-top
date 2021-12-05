import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export const enum ButtonColors {
  primary = 'primary',
  ghost = 'ghost',
}

export const enum ArrowDirections {
  down = 'down',
  right = 'right',
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode,
  appearance: keyof typeof ButtonColors,
  className?: string,
  hasArrowIcon?: boolean,
  arrowDirection?: keyof typeof ArrowDirections,
}

