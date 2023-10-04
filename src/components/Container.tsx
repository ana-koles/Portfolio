import styled from "styled-components";
import { Thema } from "../styles/Thema";

export const Container = styled.div`
  max-width: 1100px; /* 1070px + padding 15px for mobile */
  width: 100%;
  min-height: 100%; /* have to be at least 100% height of the parent; */
  padding: 0 15px; /* for mobile */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  @media ${Thema.media.large} {
    max-width: 960px;
  }

  @media ${Thema.media.tablet} {
    max-width: 720px;
  }

  @media ${Thema.media.mobile} {
    max-width: 320px;
  }
`