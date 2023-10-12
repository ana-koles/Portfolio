import styled from 'styled-components';
import { Thema } from '../../styles/Thema';

const Header = styled.header`
  height: 90px;

  @media ${Thema.media.mobile} {
    height: 45px;
  }
`

export const S = {
  Header
}