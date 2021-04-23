import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifBold } from '../../styles/FontStyles';
import { useTranslation } from 'react-i18next';

const ThanksTitle = styled.h1`
  text-align: center;
  ${ sansSerifBold };
`;

/**
 * Component for displaying content about our partners
 */
function Thanks(): ReactElement {
  const { t } = useTranslation();

  return (
    <ThanksTitle> {t('thanks.title')} </ThanksTitle>
  );
}

export default Thanks;
