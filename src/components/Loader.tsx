import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ReactElement } from 'react';

/**
 * Returns styles for array of circles in loader
 */
function createCircleStyles(): FlattenSimpleInterpolation {
  let circleStyles = ``;
  const circleColors = ['#8BCAE5', '#87C5E3', '#76B0DA', '#699FD3', '#5789CA'];

  for (let i = 0; i < 5; i++) {
    circleStyles += `
      .circle-${i} {
        background-color: ${ circleColors[i] };

        &:before {
          background-color: ${ circleColors[i] };
          animation-delay: ${ 200 * i }ms;
        }
      }
    `;
  }

  return css`${ circleStyles }`;
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  ${ createCircleStyles() };

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50%, 75% {
      transform: scale(2.5);
    }
    78%, 100% {
      opacity: 0;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10px;
  height: 10px;

  border-radius: 50%;
  margin: 7px;

  &:before {
    /**
     * Fixes position of center
     */
    position: relative;
    left: -0.5px;
    top: -0.5px;

    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.7;
    animation: scale 2s infinite cubic-bezier(0, 0, 0.5, 1);
  }
`;


/**
 * Loader for lazy load in components
 */
export default function Loader(): ReactElement {
  return (
    <LoaderWrapper>
      <Circle className="circle-0"/>
      <Circle className="circle-1"/>
      <Circle className="circle-2"/>
      <Circle className="circle-3"/>
      <Circle className="circle-4"/>
    </LoaderWrapper>
  );
}
