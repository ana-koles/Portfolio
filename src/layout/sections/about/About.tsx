import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper>
        <SectionTitle>About Me</SectionTitle>
        <ContentWrapper>
          <Text>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</Text>
          <Button type={'button'} styleType='filled'>Download CV</Button>
          <Button type={'button'} styleType='filled'>View Projects</Button>
        </ContentWrapper>

      </FlexWrapper>

    </StyledAbout>
  );
};

const StyledAbout = styled.section`

`

const ContentWrapper = styled.div`
  width: 60%;
  margin-left: 100px;

`

const Text = styled.p`

`