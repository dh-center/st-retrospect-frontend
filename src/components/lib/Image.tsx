import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import WithClassName from '../../interfaces/WithClassName';
import LocationPlaceholder from '../../assets/location-no-photo.svg';
import RoutePlaceholder from '../../assets/route-no-photo.svg';
import PersonPlaceholder from '../../assets/person-no-photo.svg';

interface ImageProps extends WithClassName {
  type: 'location' | 'person' | 'route';
  src: string | null;
}

interface WrapperProps {
  type: 'location' | 'person' | 'route';
}

const Wrapper = styled.div<WrapperProps>`
  ${ (props) => {
    switch (props.type) {
      case 'location':
        return css`
          background-image: url("${ LocationPlaceholder }");
        `;
      case 'route':
        return css`
          background-image: url("${ RoutePlaceholder }");
        `;
      case 'person':
        return css`
          background-image: url("${ PersonPlaceholder }");
        `;
    }
  }};
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-light-gray);
`;

interface ImageBlockProps {
  src: string | null;
}

/**
 * Image block in item in lists
 *
 * @param props - props of component
 */
const ImageBlock = styled.div<ImageBlockProps>`
  height: 100%;
  width: 100%;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

/**
 * @param props
 */
export default function Image(props: ImageProps): ReactElement {
  return (
    <Wrapper className={props.className} type={props.type}>
      <ImageBlock src={props.src}/>
    </Wrapper>
  );
}

export const ImageInItem = styled(Image)`
  min-width: 60px;
  min-height: 100%;
`;

export const ImageInCard = styled(Image)`
  min-width: 100%;
  min-height: 144px;
`;
