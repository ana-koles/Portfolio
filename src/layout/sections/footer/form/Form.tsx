import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SubmitButton } from '../../../../components/Button';


export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper wrap={'wrap'} justify='space-between'>
        <Input placeholder={'Name'}/>
        <Input placeholder={'Email Address'}/>
        <Input placeholder={'Subject'}/>
        <Input placeholder={'Phone'}/>
      </FlexWrapper>
      <Input as={"textarea"} placeholder={'Your message'}/>
      <SubmitButton type={'submit'} styleType='outlined'>Send message</SubmitButton>
  </StyledForm>
  );
};


const StyledForm = styled.div`
  max-width: 40%;
`

type InputPropsType = {
  as: 'textarea' | 'input'
}

const Input = styled.input<InputPropsType>`
  width: 47%;
  border: 1px solid pink;

  ${props => props.as === 'textarea' && css<InputPropsType>`
    width: 100%;
    height: 135px;
  `}

`

