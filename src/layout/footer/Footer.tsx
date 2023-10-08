import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { S } from './Footer_Styles';


const iconsData = [{iconId: 'be'}, {iconId: 'insta'}, {iconId: 'linkedin'}]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction='column' align='center'>
          <S.ContactsWrapper>
            <FlexWrapper >
              <Icon iconId={'phone'} height={'24px'} width={'24px'} viewBox={'0 0 24px 24px'}/>
              <S.Text>375293652034</S.Text>
            </FlexWrapper>
            <Icon iconId={'vertline'} height={'35px'} width={'4px'} viewBox={'0 0 35px 4px'}/>
            <FlexWrapper>
              <Icon iconId={'mail'} height={'17px'} width={'24px'} viewBox={'0 0 17px 24px'}/>
              <S.Text>anastasijakoles@gmail.com</S.Text>
            </FlexWrapper>
          </S.ContactsWrapper>

          <S.SocialIconList>
            {iconsData.map((icon, index: number) => {
              return (
                <S.SocialIconItem key={index}>
                  <S.SolialIconLink>
                    <Icon iconId={icon.iconId} height={'40px'} width={'40px'} viewBox={'0 0 40px  40px'} />
                  </S.SolialIconLink>
                </S.SocialIconItem>
              )
              })}
          </S.SocialIconList>

          <S.Copyright>© 2023 Anastasiya Kalesnikava, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </Container>
      </S.Footer>
  );
};
