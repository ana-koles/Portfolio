import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: string,
  wrap?: string,
  justify?: string,
  align?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  border: 1px solid blue;
  height: 100%;
  width: 100%;
`