import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Thema } from '../../../../styles/Thema';

type LabelPropsType = {
  name: string,
  text: string,
  link: string
}

export const Label = (props: LabelPropsType) => {
  return (
    <LabelWrapper>
      <ProjectName>{props.name}</ProjectName>
      <FlexWrapper justify='space-between'>
        <Text>{props.text}</Text>
        <Link href={props.link}>Demo</Link>
      </FlexWrapper>

    </LabelWrapper>
  );
};

export const LabelWrapper = styled.div`
  position: absolute;
  max-width: 495px;
  width: 100%;
  padding: 28px 28px;
  background-color: white;
  bottom: 0;
  z-index: 10;
  transform: translateY(100%);
  transition: .5s;
`
const ProjectName = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: capitalize;
  margin-bottom: 15px;
`


const Text = styled.p`
  color: ${Thema.colors.linkColor};
  font-size: 1.4rem;

`

const Link = styled.a`
  color: ${Thema.colors.linkColor};
  font-size: 1.4rem;
  letter-spacing: 1.4px;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }

`