import React from 'react';
import AllNews from '../AllNews/AllNews';
import CarouselTOP from './Carousel/CarouselTOP';

const Header = () => {
    return (
        <div className="">
            <CarouselTOP></CarouselTOP>
            <AllNews></AllNews>
        </div>
    );
};

export default Header;