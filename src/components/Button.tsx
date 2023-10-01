import styled, {css} from 'styled-components';
import { Thema } from '../styles/Thema';

type PropsBtnPropsType = {
  styleType?: 'outlined' | 'filled',
  type: string
}

export const Button = styled.button<PropsBtnPropsType>`
  background-color: aliceblue;
  font-size: 19px;
  font-weight: 600;
  line-height: 2;
  letter-spacing: 1.9px;
  text-transform: capitalize;

  ${props => props.styleType === 'outlined' && css<PropsBtnPropsType>`
    background-color: transparent;
    border: 1px solid ${Thema.colors.accent};
  `
  }

  ${props => props.styleType === 'filled' && css<PropsBtnPropsType>`
    background-color: ${Thema.colors.accent};
    color: white;
    border: none;

  `}
`

