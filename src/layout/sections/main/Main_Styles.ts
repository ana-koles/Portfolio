import styled from 'styled-components';
import { Thema } from '../../../styles/Thema';
import { font } from '../../../styles/Common';

const Main = styled.section`
  display: flex;
  padding-bottom: 120px;

  @media ${Thema.media.tablet} {
    padding-top: 40px;
    padding-bottom: 80px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  min-height: 445px;
  position: relative;
  z-index: 10;
  width: 100%;

  @media ${Thema.media.large} {
    flex-direction: column;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 10;

  @media ${Thema.media.large} {
    margin-bottom: 80px;
    min-height: 350px;
  }

  @media ${Thema.media.mobile} {
    margin-bottom: 55px;
    min-height: 265px;
  }

  button {
    font-size: 1.9rem;
    font-weight: 600;
    letter-spacing: 1.9px;
    text-transform: capitalize;
    width: 175px;
    height: 55px;


    @media ${Thema.media.mobile} {
      margin: 0 auto;
      font-size: 1.5rem;
      width: 170px;
      height: 50px;
    }
  }
`

const Span = styled.span`
  font-size: 18px;

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const MainTitle = styled.h1`
  ${font({fontFamily: `'Epilogue', sans-serif`, weight: 800, color: Thema.colors.accent})}
  font-size: 6rem;

  @media ${Thema.media.tablet} {
    font-size: 4.5rem;
  }

  @media ${Thema.media.mobile} {
    font-size: 2.3rem;
  }
`

const Name = styled.h2`
/* mixin */
  ${font({fontFamily: `'Epilogue', sans-serif`, weight: 800})}
  letter-spacing: -0.6px;
  font-size: 6rem;

  @media ${Thema.media.tablet} {
    font-size: 4.5rem;
  }

  @media ${Thema.media.mobile} {
    font-size: 2.3rem;
  }

  span {
    color: white;

    @media ${Thema.media.large} {
      color: ${Thema.colors.text}
    }

    @media ${Thema.media.tablet} {
      font-size: 4.5rem;
    }

    @media ${Thema.media.mobile} {
      margin-bottom: 5px;
      font-size: 2.3rem;
    }
  }
`

const Text = styled.p`
  font-size: 2rem;
  width: 60%;
  line-height: 2;
  display: inline-block;
  text-align: left;

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
    line-height: 1.5;
    width: 100%;
  }
`

const OuterWrapper = styled.div`
  position: absolute;
  right: 0px;
  width: 445px;
  height: 445px;


  @media ${Thema.media.large} {
    position: relative;
    right: 0;
    left: 50%;
    transform: translate(-50%);
  }

  @media ${Thema.media.tablet} {
    width: 400px;
    height: 400px;
  }

  @media ${Thema.media.mobile} {
    width: 250px;
    height: 250px;
  }

  &::before {
    content: "";
    display: block;
    width: 445px;
    height: 445px;
    background-color: ${Thema.colors.primaryBg};
    position: absolute;
    transform: rotate(-7deg);
    z-index: 0;

    @media ${Thema.media.tablet} {
      width: 400px;
      height: 400px;

    }

    @media ${Thema.media.mobile} {
      width: 250px;
      height: 250px;
    }
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 445px;
  width: 445px;
  transform: rotate(7.5deg);
  overflow: hidden;

  @media ${Thema.media.tablet} {
    height: 400px;
    width: 400px;
  }

  @media ${Thema.media.mobile} {
    height: 250px;
    width: 250px;
  }
`

type PhotoPropsType = {
  src: string,
  alt: string,
}

const Photo = styled.img<PhotoPropsType>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.7) translateY(70px) translateX(20px);

  @media ${Thema.media.mobile} {
    transform: scale(1.7) translateY(35px) translateX(10px);
  }
`

export const S = {
  Main,
  ContentWrapper,
  TextContent,
  Span,
  MainContent,
  MainTitle,
  Name,
  Text,
  OuterWrapper,
  PhotoWrapper,
  Photo
}

