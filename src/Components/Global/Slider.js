import React from 'react';
import styled, { css } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowSmLeft } from '@styled-icons/heroicons-solid/ArrowSmLeft';
import { ArrowSmRight } from '@styled-icons/heroicons-solid/ArrowSmRight';

export const onClickPrev = () => console.log('prev');
export const onClickNext = () => console.log('next');

const Slider = () => {
  const arrowStyles = {};
  return (
    <StSlider>
      <Carousel
        infiniteLoop
        showThumbs={true}
        showIndicators={false}
        showArrows={true}
        showStatus={true}
        renderArrowPrev={(onClickPrev, hasPrev, label) =>
          hasPrev && (
            <StButton
              type="button"
              onClick={onClickPrev}
              title={label}
              style={{ ...arrowStyles, left: '1rem' }}
            >
              <StPrevIcon />
            </StButton>
          )
        }
        renderArrowNext={(onClickNext, hasNext, label) =>
          hasNext && (
            <StButton
              type="button"
              onClick={onClickNext}
              title={label}
              style={{ ...arrowStyles, right: '1rem' }}
            >
              <StNextIcon />
            </StButton>
          )
        }
      >
        <div>
          <img src="/images/instagram/1.png" />
        </div>
        <div>
          <img src="/images/instagram/2.png" />
        </div>
        <div>
          <img src="/images/instagram/3.png" />
        </div>
        <div>
          <img src="/images/instagram/4.png" />
        </div>
        <div>
          <img src="/images/instagram/5.png" />
        </div>
        <div>
          <img src="/images/instagram/6.png" />
        </div>
      </Carousel>
    </StSlider>
  );
};

const StSlider = styled.div`
  width: 100%;
  & .carousel {
    text-align: center;
  }
  & .carousel-status {
    border: none;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: ${({ theme }) => theme.black};
    font-weight: 900;
    text-shadow: none;
  }
  & .carousel-slider {
    border: 3px solid ${({ theme }) => theme.fontColor};
    padding: 0.5rem;
  }
`;

const StButton = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 1.5rem);
  background: ${({ theme }) => theme.black};
  width: 3rem;
  height: 3rem;
`;

const iconStyle = css`
  color: ${({ theme }) => theme.white};
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StPrevIcon = styled(ArrowSmLeft)`
  ${iconStyle};
`;

const StNextIcon = styled(ArrowSmRight)`
  ${iconStyle};
`;

export default Slider;
