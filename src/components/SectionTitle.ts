import styled from 'styled-components';
import { Thema } from '../styles/Thema';
import { font } from '../styles/Common';

export const SectionTitle = styled.h2`
  ${font({fontFamily: `'Epilogue', sans-serif`, weight: 800, Fmax: 50, Fmin: 25})}
  letter-spacing: 0.3px;
  text-align: center;
  margin-bottom: 70px;
  font-weight: 800;
  line-height: 1.2;

  @media ${Thema.media.mobile} {
    margin-bottom: 40px;
  }
`

export const SectionAboutTitle = styled(SectionTitle)`
  text-align: left;

  @media ${Thema.media.tablet} {
    margin-bottom: 40px;
  }
`