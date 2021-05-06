import { useHistory } from 'react-router-dom';
import { ReactElement } from 'react';
import ArrowButton from '../ArrowButton';


/**
 * Going back button in top-left corner
 */
export default function GoingBackButton(): ReactElement {
  const history = useHistory();

  return (
    <ArrowButton onClick={() => history.goBack()}/>
  );
}
