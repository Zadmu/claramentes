import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const TopicCarousel = () => {
        return (
            <div className = "carousel-wrapper">
                <Carousel>
                    <div>
                        <img src="assets/1.jpeg" />
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                    </div>
                </Carousel>
                <style global jsx>{`
                    .carousel .slide {
                    background: none;
                    }
                    .carousel .control-next.control-arrow:before {
                    border-left: 8px solid black;
                    }
                    .carousel .control-prev.control-arrow:before {
                    border-right: 8px solid black;
                    }
                `}</style>
            </div>
        );
}

export default TopicCarousel;