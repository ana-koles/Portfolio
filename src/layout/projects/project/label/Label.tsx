import React from 'react';
import styled from 'styled-components';

type LabelPropsType = {
  name: string,
  text: string,
  link: string
}

export const Label = (props: LabelPropsType) => {
  return (
    <LabelWrapper>
      <ProjectName>{props.name}</ProjectName>
      <TextWrapper>
        <Text>{props.text}</Text>
        <Link href={props.link}>Demo</Link>
      </TextWrapper>

    </LabelWrapper>
  );
};

const LabelWrapper = styled.div`

`
const ProjectName = styled.h4`

`

const TextWrapper = styled.div`

`

const Text = styled.p`

`

const Link = styled.a`

`