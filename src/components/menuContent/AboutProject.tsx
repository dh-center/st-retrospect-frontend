import { ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import AboutProjectQR from '../../images/about-project-qr.png';
import AboutProjectQuest from '../../images/about-project-quest.png';
import Paragraph from './Paragraph';
import Title from './Title';

const AboutProjectImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img:first-child {
    margin-right: 16px;
  }
`;

/**
 * Component for displaying content about our partners
 */
export default function AboutProject(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('aboutProject.title')}</Title>
      <Paragraph>
        <strong>St.Retrospect</strong> — это интерактивная карта Санкт-Петербурга, построенная вокруг связей исторических персоналий и городских локаций.
      </Paragraph>
      <Paragraph>
          Это своеобразная адресная книга, с помощью которой можно узнать, например, какие здания спроектировал где жила Ахматова, где кутил Чайковский, в какой церкви чета Пушкиных крестила своих детей и многое другое. St. Retrospect — это попытка сместить фокус с общеизвестных туристических достопримечательностей, на менее известные, но не менее интересные локации.
      </Paragraph>
      <Paragraph>
          В каталоге представлены тематические подборки, которые можно пройти виртуально или физически — для прогулок по городу предлагаем скачать наше <a href="https://github.com/dh-center/QueSt" target="_blank" rel="noreferrer">мобильное приложение «Que.St»</a>. Там Вы найдёте не только обзорные и тематические маршруты, но также квесты, интерактивные новеллы и квизы. Вы сможете коллекционировать карточки исторических персоналий, собирать достижения и делиться ими с товарищами.
      </Paragraph>
      <AboutProjectImages>
        <img src={AboutProjectQR} alt={'qr-link'}/>
        <img src={AboutProjectQuest} alt={'quest'}/>
      </AboutProjectImages>
    </>
  );
}
