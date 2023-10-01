import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align='center'>
          <ContentWrapper>

            <TextContent>
              <StyledSpan>Hi Everyone!</StyledSpan>
              <StyledMainContent>
                <StyledName>Anastasiya Kalesni<span>kava</span></StyledName>
                <StyledMainTitle>Frontend Developer</StyledMainTitle>
              </StyledMainContent>
              <Text>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</Text>
              <Button styleType='outlined' type='button'>Get in Touch</Button>
            </TextContent>

            <OuterWrapper>
              <PhotoWrapper>
                <StyledPhoto src={photo} alt="photo" />
              </PhotoWrapper>
            </OuterWrapper>

          </ContentWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 760px;
  display: flex;
`

const ContentWrapper = styled.div`
  display: flex;
  min-height: 445px;
  position: relative;
  z-index: 10;
  width: 100%;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 10;

  button {
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 1.9px;
    text-transform: capitalize;
    width: 175px;
    height: 55px;
  }
`

const StyledSpan = styled.span`
  font-size: 18px;

`

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledMainTitle = styled.h1`
  font-family: 'Epilogue', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  color: ${Thema.colors.accent};
  letter-spacing: 1.2px;
`

const StyledName = styled.h2`
  font-family: 'Epilogue', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.1rem;

  span {
    color: white
  }
`

const Text = styled.p`
  font-size: 20px;
  width: 60%;
  line-height: 2;
  display: inline-block;
  text-align: left;
`

const OuterWrapper = styled.div`
  position: absolute;
  right: 25px;

  &::before {
    content: "";
    display: block;
    width: 445px;
    height: 445px;
    background-color: ${Thema.colors.primaryBg};
    position: absolute;
    left: -20px;
    transform: rotate(-7deg);
    z-index: 0;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 445px;
  width: 445px;

  transform: rotate(7.5deg);
  overflow: hidden;

  /* &::before {
    content: "";
    display: block;
    width: 445px;
    height: 445px;
    background-color: ${Thema.colors.primaryBg};
    position: absolute;
    left: -20px;
    transform: rotate(-7deg);
    z-index: 0;
  } */
`

type StyledPhotoPropsType = {
  src: string,
  alt: string,
}

const StyledPhoto = styled.img<StyledPhotoPropsType>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.7) translateY(70px) translateX(20px)

`


