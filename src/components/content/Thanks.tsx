import { ReactElement } from 'react';
import styled from 'styled-components';
import {sansSerifBold, sansSerifRegular} from '../../styles/FontStyles';
import { useTranslation } from 'react-i18next';

const ThanksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 13% 0;
`;

const ThanksTitle = styled.h1`
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

/**
 * Component for displaying content about our partners
 */
function Thanks(): ReactElement {
  const { t } = useTranslation();

  return (
    <ThanksWrapper>
      <ThanksTitle> {t('thanks.title')} </ThanksTitle>
      <AboutProjectText>
        Проект создан и поддерживается силами интердисциплинарной команды <span>Международного центра цифровых гуманитарных исследований Университета ИТМО</span>.
        <br/><br/>
        Мы — это музеевед, культуролог, филолог, один мобильный и два full-stack разработчика и дизайнер.
        <br/><br/>
        Этот проект не был бы возможен без помощи, оказанной Университетом ИТМО: его администрацией, преподавателями и студентами. Особо значимый вклад в развитие проекта и пополнение контента ежегодно вносят студенты международной магистерской программы “Анализ культурных данных и визуализация”. Мы также благодарны нашим партнёрам из культурных институций, которые помогают нам с поиском информации и новых сюжетов.
        <br/><br/>
        Вы также можете помочь проекту, предложив новую локацию через форму обратной связи или написав нам на почту dh@itmo.ru.

      </AboutProjectText>
    </ThanksWrapper>
  );
}

export default Thanks;
