import { useHistory } from 'react-router-dom';
import { ReactElement } from 'react';
import ArrowButton from '../buttons/ArrowButton';
import WithOnClick from '../../interfaces/WithOnClick';

interface GoingBackButtonProps extends WithOnClick {}

/**
 * Going back button in top-left corner
 *
 * @param props - props of component
 */
export default function GoingBackButton(props: GoingBackButtonProps): ReactElement {
  const history = useHistory();

  /**
   * Use onClick handler from props or default
   */
  const onClickHandler = props.onClick ? props.onClick : () => history.goBack();

  return (
    <ArrowButton onClick={onClickHandler}/>
  );
}
