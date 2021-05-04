import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifBold } from '../../styles/FontStyles';
import { sansSerifRegular } from '../../styles/FontStyles';
import { useTranslation } from 'react-i18next';
import AboutProjectQR from '../../images/about-project-qr.png';
import AboutProjectQuest from '../../images/about-project-quest.png';

const AboutProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 13% 0;
`;

const AboutProjectTitle = styled.h1`
  text-align: center;
  ${ sansSerifBold };
  font-size: 36px;
`;

const AboutProjectText = styled.p`
  ${ sansSerifRegular };
  font-size: 18px;
  line-height: 28px;

  span {
    ${ sansSerifBold };
  }
`;

const AboutProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 16px 0;
  }
`;

/**
 * Component for displaying content about our partners
 */
export default function AboutProject(): ReactElement {
  const { t } = useTranslation();

  return (
    <AboutProjectWrapper>
      <AboutProjectTitle> {t('aboutProject.title')} </AboutProjectTitle>

      <AboutProjectText>
        <span>St.Retrospect</span> — это интерактивная карта Санкт-Петербурга, построенная вокруг связей исторических персоналий и городских локаций.
        <br/><br/>
        Это своеобразная адресная книга, с помощью которой можно узнать, например, какие здания спроектировал  где жила Ахматова, где кутил Чайковский, в какой церкви чета Пушкиных крестила своих детей и многое другое. St. Retrospect — это попытка сместить фокус с общеизвестных туристических достопримечательностей, на менее известные, но не менее интересные локации.
        <br/><br/>
        В каталоге представлены тематические подборки, которые можно пройти виртуально или физически — для прогулок по городу предлагаем скачать наше мобильное приложение «Que.St». Там Вы найдёте не только обзорные и тематические маршруты, но также квесты, интерактивные новеллы и квизы. Вы сможете коллекционировать карточки исторических персоналий, собирать достижения и делиться ими с товарищами.
      </AboutProjectText>

      <AboutProjectLinks>
        <img src={AboutProjectQR} alt={'qr-link'}/>
        <img src={AboutProjectQuest} alt={'quest'}/>
      </AboutProjectLinks>
    </AboutProjectWrapper>
  );
}
