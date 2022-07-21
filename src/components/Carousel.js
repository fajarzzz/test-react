import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style/Carousel.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={require('../assets/images/bg.jpg')}
                    alt="1"
                />
                <Carousel.Caption className='carousel-tag'>
                    <h3>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/images/about-bg.jpg')}
                    alt="2"
                />
                <Carousel.Caption className='carousel-tag'>
                    <h3>WE DON'T HAVE THE BEST BUT WE HAVE GREATEST TEAM</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;