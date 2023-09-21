import styled, {css} from 'styled-components';

type PropsBtnPropsType = {
  styleType?: 'outlined' | 'filled',
  type: string
}

export const Button = styled.button<PropsBtnPropsType>`
  background-color: aliceblue;

  ${props => props.styleType === 'outlined' && css<PropsBtnPropsType>`
    background-color: transparent;
    border: 1px solid 'pink';

  `
  }

  ${props => props.styleType === 'filled' && css<PropsBtnPropsType>`
  background-color: pink;

  `}
`

export const SubmitButton = styled(Button)`
  width: 100%;
`