import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify='space-between' align='center'>
          <ContentWrapper>
            <TextWrapper>
              <span>Hi Everyone!</span>
              <StyledName>Anastasiya Kalesnikava</StyledName>
              <StyledMainTitle>Frontend Developer</StyledMainTitle>
            </TextWrapper>
            <Button styleType='outlined' type='button'>Get in Touch</Button>
          </ContentWrapper>
          <StyledPhoto src={photo} alt="photo" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: beige;
  min-height: 760px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`


type StyledPhotoPropsType = {
  src: string,
  alt: string
}

const StyledPhoto = styled.img<StyledPhotoPropsType>`
  height: 445px;
  width: 445px;
  object-fit: cover;
`

const StyledMainTitle = styled.h1`

`

const StyledName = styled.h2`

`
