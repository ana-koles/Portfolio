import styled, {css} from 'styled-components';

type PropsBtnPropsType = {
  btnType: string
}

export const StyledButton = styled.button<PropsBtnPropsType>`
  background-color: aliceblue;

  ${props => props.btnType === 'outlined' && css<PropsBtnPropsType>`
    background-color: transparent;
    border: 1px solid 'pink';

  `
  }

  ${props => props.btnType === 'filled' && css<PropsBtnPropsType>`
  background-color: pink;

  `}
`