import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Title from './Title';
import Paragraph from './Paragraph';

/**
 * Component for displaying content about our partners
 */
export default function Thanks(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('thanks.title')}</Title>
      <Paragraph>
          Проект создан и поддерживается силами интердисциплинарной команды <strong>Международного центра цифровых гуманитарных исследований Университета ИТМО</strong>.
      </Paragraph>
      <Paragraph>
          Мы — это музеевед, культуролог, филолог, один мобильный и два full-stack разработчика и дизайнер.
      </Paragraph>
      <Paragraph>
          Этот проект не был бы возможен без помощи, оказанной Университетом ИТМО: его администрацией, преподавателями и студентами. Особо значимый вклад в развитие проекта и пополнение контента ежегодно вносят студенты международной магистерской программы “Анализ культурных данных и визуализация”. Мы также благодарны нашим партнёрам из культурных институций, которые помогают нам с поиском информации и новых сюжетов.
      </Paragraph>
      <Paragraph>
          Вы также можете помочь проекту, предложив новую локацию через форму обратной связи или написав нам на почту dh@itmo.ru.
      </Paragraph>
    </>
  );
}
