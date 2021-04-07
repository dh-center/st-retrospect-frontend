import { ForwardedRef, forwardRef, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import { sansSerifLight } from '../styles/FontStyles';
import ArrowIcon from '../assets/arrow-left-second.svg';
import { useTranslation } from 'react-i18next';

/**
 * Props of load more button
 */
interface LoadMoreButtonProps extends HTMLProps<HTMLButtonElement> {
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
 * @param ref - ref of component
 */
export default forwardRef<HTMLButtonElement, LoadMoreButtonProps>(
  (props: LoadMoreButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
    const { t } = useTranslation();

    return (
      <Button onClick={props.onClick} ref={ref}>
        { props.isLoadingNext ? <Loader/> : <>
          <ArrowBottomIcon/>
          { t('loadMore') }
        </> }
      </Button>
    );
  });
