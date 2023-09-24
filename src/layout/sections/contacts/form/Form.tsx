import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SubmitButton } from '../../../../components/Button';


export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper wrap={'wrap'} justify='space-between'>
        <Input type={'text'} placeholder={'Name'}/>
        <Input type={'email'} placeholder={'Email Address'}/>
        <Input type={'text'} placeholder={'Subject'}/>
        <Input type={'text'} placeholder={'Phone'}/>
      </FlexWrapper>
      <TextArea placeholder={'Your message'}/>
      <SubmitButton type={'submit'} styleType='outlined'>Send message</SubmitButton>
  </StyledForm>
  );
};


const StyledForm = styled.div`
  max-width: 40%;
`

type InputPropsType = {
  type?: string | null,
  placeholder: string
}

const Input = styled.input.attrs<InputPropsType>((props) => ({
  placeholder: props.type || 'Please fill'
}))`
  width: 47%;
  border: 1px solid pink;

`

const TextArea = styled.textarea `
  width: 100%;
  height: 135px;
`

