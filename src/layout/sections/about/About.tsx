import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionAboutTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';

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
            <ButtonWrapper>
              <Button type={'button'} styleType='filled'>Download CV</Button>
              <Button type={'button'} styleType='filled'>View Projects</Button>
            </ButtonWrapper>
          </ContentWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  display: flex;

  @media ${Thema.media.tablet} {
    ${FlexWrapper}  {
      flex-direction: column;
    }
  }
`

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
`

const ContentWrapper = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 74px;

  button {
    width: 175px;
    height: 57px
  }

  button + button {
    margin-left: 45px;
  }

  @media ${Thema.media.tablet} {
    width: 100%;
    margin-left: 0;
  }

  @media ${Thema.media.mobile} {
    button {
      width: 170px;
      height: 50px
    }
  }
`

const Text = styled.p`
  display: inline-block;
  padding-right: 20px;
  font-size: 2.2rem;
  line-height: 2;
  margin-bottom: 4rem;
  letter-spacing: 0.44px;

  @media ${Thema.media.tablet} {
    padding-right: 0px;
  }


  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`

const ButtonWrapper = styled.div `
  display: flex;

  @media ${Thema.media.tablet} {
    justify-content: center;
  }
`