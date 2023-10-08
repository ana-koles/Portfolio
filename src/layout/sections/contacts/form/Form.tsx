import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { Thema } from '../../../../styles/Thema';
import { S } from './Form_Styles';


export const Form: React.FC = () => {
  return (
    <S.Form>
      <S.FormWrapper>
        <S.Input type={'text'} placeholder={'Name*'}/>
        <S.Input type={'email'} placeholder={'Email Address*'}/>
        <S.Input type={'text'} placeholder={'Subject*'}/>
        <S.Input type={'text'} placeholder={'Phone'}/>
      </S.FormWrapper>
      <S.TextArea placeholder={'Your message'}/>
      <Button type={'submit'} styleType='outlined'>Send message</Button>
  </S.Form>
  );
};

