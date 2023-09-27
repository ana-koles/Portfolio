import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionAboutTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper align='center'>
          <HeadWrapper>
            <SectionAboutTitle>About Me</SectionAboutTitle>
          </HeadWrapper>
          <ContentWrapper>
            <Text>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</Text>
            <Button type={'button'} styleType='filled'>Download CV</Button>
            <Button type={'button'} styleType='filled'>View Projects</Button>
          </ContentWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 470px;
  display: flex;
`

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-top: 85px;
`

const ContentWrapper = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 150px;

  button {
    width: 170px;
    height: 50px
  }

  button + button {
      margin-left: 45px;
  }
`

const Text = styled.p`
  display: inline-block;
  padding-right: 20px;
  font-size: 22px;
  letter-spacing: 0.44px;
  line-height: 2;
  margin-bottom: 4rem;
`