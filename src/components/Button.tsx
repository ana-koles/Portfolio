import styled, {css} from 'styled-components';
import { Thema } from '../styles/Thema';

type PropsBtnPropsType = {
  styleType?: 'outlined' | 'filled',
  type: string
}

export const Button = styled.button<PropsBtnPropsType>`
  background-color: aliceblue;

  ${props => props.styleType === 'outlined' && css<PropsBtnPropsType>`
    background-color: transparent;
    border: 1px solid ${Thema.colors.accent};

  `
  }

  ${props => props.styleType === 'filled' && css<PropsBtnPropsType>`
  background-color: ${Thema.colors.accent};
  `}
`

export const SubmitButton = styled(Button)`
  width: 100%;
`