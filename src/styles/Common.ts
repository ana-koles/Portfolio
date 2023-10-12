import { Thema } from "./Thema"

type FontPropsType = {
  fontFamily?: string,
  weight?: number,
  color?: string,
  lineHeight?: number,
  Fmin?: number,
  Fmax?: number
}

/* Mixin */
export const font = ({fontFamily, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
  font-family: ${fontFamily || 'Manrope'};
  font-weight: ${weight || 400};
  color: ${color || Thema.colors.text};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 320px)/(1280 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`