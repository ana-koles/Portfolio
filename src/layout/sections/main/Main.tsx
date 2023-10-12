import React from 'react';
import photo from '../../../assets/images/photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align='center' wrap='wrap'>
          <S.ContentWrapper>

            <S.TextContent>
              <S.Span>Hi Everyone!</S.Span>
              <S.MainContent>
                <S.Name>Anastasiya Kalesni<span>kava</span></S.Name>
                <S.MainTitle>Frontend Developer</S.MainTitle>
              </S.MainContent>
              <S.Text>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</S.Text>
              <Button styleType='outlined' type='button'>Get in Touch</Button>
            </S.TextContent>

            <S.OuterWrapper>
              <S.PhotoWrapper>
                <S.Photo src={photo} alt='photo'></S.Photo>
              </S.PhotoWrapper>
            </S.OuterWrapper>

          </S.ContentWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

