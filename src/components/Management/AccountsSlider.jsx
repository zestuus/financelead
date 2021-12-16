import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from "styled-components";

import {Grid} from "@material-ui/core";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Account from "./Account";

const AccountsSliderWrapper = styled(Grid)`
  height: 120px;
  margin-bottom: 20px;
`;

const AccountContainer = styled.div`
  width: 200px;
  height: 110px;
  padding: 5px 7px;
  user-select: none;
`;

const ArrowButton = styled(Grid)`
  width: 40px;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  margin: 0 5px;
  :hover {
    background-color: #eee;
  },
`;

const CarouselWrapper = styled(Grid)`
  flex: 1;
  overflow: hidden;
  padding: 5px;
`;

const Arrow = ({ action, Icon }) => (
  <ArrowButton
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    onClick={action}
  >
    <Icon fontSize="large"/>
  </ArrowButton>
);

const AccountsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [difference, setDifference] = useState(0);

  const items = [...new Array(5).keys()].map(index => {
    const colorStyle = index % 2 ? {} : { backgroundColor: '#050505' };
    const shadowStyle = index === activeIndex ? { boxShadow: '4px 4px 5px grey' } : {}

    return (
      <AccountContainer
        onMouseDown={(e) => setDeltaX(e.pageX)}
        onMouseUp={(e) => setDifference(Math.abs(e.pageX - deltaX))}
        onClick={() => (difference < 20) && setActiveIndex(index)}>
        <Account style={{ ...colorStyle, ...shadowStyle }}/>
      </AccountContainer>
    )
  })

  const slidePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
  const slideNext = () => setActiveIndex(Math.min(activeIndex + 1, items.length - 1));
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <AccountsSliderWrapper container>
      <Arrow action={slidePrev} Icon={ArrowLeftIcon}/>
      <CarouselWrapper
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <AliceCarousel
          autoWidth
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
      </CarouselWrapper>
      <Arrow action={slideNext} Icon={ArrowRightIcon}/>
    </AccountsSliderWrapper>
  );
};

export default AccountsSlider;