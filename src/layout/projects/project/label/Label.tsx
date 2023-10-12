import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Thema } from '../../../../styles/Thema';
import { S } from './Label_Styles';

type LabelPropsType = {
  name: string,
  text: string,
  link: string
}

export const Label: React.FC<LabelPropsType> = (props: LabelPropsType) => {
  return (
    <S.LabelWrapper>
      <S.ProjectName>{props.name}</S.ProjectName>
      <FlexWrapper justify='space-between'>
        <S.Text>{props.text}</S.Text>
        <S.Link href={props.link}>Demo</S.Link>
      </FlexWrapper>

    </S.LabelWrapper>
  );
};