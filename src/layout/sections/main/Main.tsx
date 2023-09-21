import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify='space-around' align='center'>
        <div>
          <div>
            <span>Hi Everyone!</span>
            <StyledName>Anastasiya Kalesnikava</StyledName>
            <StyledMainTitle>Frontend Developer</StyledMainTitle>
          </div>
          <Button styleType='outlined' type='button'>Get in Touch</Button>
        </div>
        <StyledPhoto src={photo} alt="photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: beige;
  min-height: 760px;
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
