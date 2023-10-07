import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { Thema } from '../../../../styles/Thema';


export const Form = () => {
  return (
    <StyledForm>
      <FormWrapper>
        <Input type={'text'} placeholder={'Name*'}/>
        <Input type={'email'} placeholder={'Email Address*'}/>
        <Input type={'text'} placeholder={'Subject*'}/>
        <Input type={'text'} placeholder={'Phone'}/>
      </FormWrapper>
      <TextArea placeholder={'Your message'}/>
      <Button type={'submit'} styleType='outlined'>Send message</Button>
  </StyledForm>
  );
};


const StyledForm = styled.div`
  margin-left: 30px;

  @media ${Thema.media.tablet} {
    max-width: 470px;
    width: 100%;
    margin: 50px 0 0;

  }

  @media ${Thema.media.mobile} {
    width: 100%;
    margin-top: 38px;
  }

  button {
    width: 100%;
    border-color: ${Thema.colors.secondaryColor};
    color: ${Thema.colors.secondaryColor};
    text-align: left;
    padding: 10px;

    @media ${Thema.media.mobile} {
      text-align: center;
    }
  }

  input,
  textarea {
    color: ${Thema.colors.placeholderColor};
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 17px;
    font-family: 'Manrope', sans-serif;
    margin-bottom: 5px;

    @media ${Thema.media.mobile} {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  }


`

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

type InputPropsType = {
  type?: string | null,
  placeholder: string,
}

const Input = styled.input.attrs<InputPropsType>((props) => ({
  placeholder: props.placeholder || 'Please fill'
}))`
  border: 1px solid pink;
  width: calc(50% - 0.5rem);

  &:nth-child(even) {
    margin-left: 0.5rem;

    @media ${Thema.media.mobile} {
      margin-left: 0;
    }
  }

  &:focus-visible {
    outline: 2px solid ${Thema.colors.contactsTextColor};
  }

  @media ${Thema.media.mobile} {
    width: 100%;
  }

`


const TextArea = styled.textarea`
  width: 100%;
  height: 135px;
  resize: none;
  border: none;

  &:focus-visible {
    outline: 2px solid ${Thema.colors.contactsTextColor};
  }
`

