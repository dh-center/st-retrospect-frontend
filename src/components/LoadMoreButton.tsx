import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import WithOnClick from '../interfaces/WithOnClick';
import { sansSerifLight } from '../styles/FontStyles';
import ArrowIcon from '../assets/arrow-left-second.svg';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

/**
 * Props of load more button
 */
interface LoadMoreButtonProps extends WithOnClick {
  /**
   * Display loader or 'Load more' text
   */
  isLoadingNext: boolean;
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 53px;

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  ${ sansSerifLight };
  color: var(--color-blue);
  font-size: 14px;
`;

const ArrowBottomIcon = styled.div`
  width: 10px;
  height: 10px;

  margin-right: 6px;

  background-image: url("${ ArrowIcon }");
  background-size: cover;
  transform: rotate(-90deg);
`;

/**
 * Load more button for lists
 *
 * @param props - props of component
 */
export default function LoadMoreButton(props: LoadMoreButtonProps): ReactElement {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  /**
   * Triggers click when button is fully in view
   */
  useEffect(() => {
    if (inView && props.onClick && !props.isLoadingNext) {
      props.onClick();
    }
  }, [ inView ]);

  return (
    <Button onClick={props.onClick} ref={ref}>
      { props.isLoadingNext ? <Loader/> : <>
        <ArrowBottomIcon/>
        { t('loadMore') }
      </> }
    </Button>
  );
}
