import styled, {css} from 'styled-components';
import { Thema } from '../styles/Thema';

type PropsBtnPropsType = {
  styleType?: 'outlined' | 'filled',
  type: string
}

export const Button = styled.button<PropsBtnPropsType>`
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  background-color: aliceblue;
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 2;
  letter-spacing: 1.9px;
  text-transform: capitalize;

  ${props => props.styleType === 'outlined' && css<PropsBtnPropsType>`
    background-color: transparent;
    border: 2px solid ${Thema.colors.accent};

    &:hover {
      background-color: ${Thema.colors.accent};
      color: ${Thema.colors.secondaryColor}
    }
  `
  }

  ${props => props.styleType === 'filled' && css<PropsBtnPropsType>`
    background-color: ${Thema.colors.accent};
    color: ${Thema.colors.secondaryColor};
    border: none;

    &:hover {
      background-color: ${Thema.colors.secondaryColor};
      color: ${Thema.colors.accent};
      border: 2px solid ${Thema.colors.accent};
    }
  `}

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
    letter-spacing: 1.4px;
  }
`

