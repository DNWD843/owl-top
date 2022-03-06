import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import {icons} from "./constants";

export const enum ButtonColors {
  primary = 'primary',
  white = 'white',
}

export interface ButtonWithIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  appearance: keyof typeof ButtonColors,
  className?: string,
  icon: keyof typeof icons,
 }

