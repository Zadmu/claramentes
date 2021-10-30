import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./TopicCarousel.module.css";

/**This component is for the left and right chevron buttons.*/
const SliderButton = ({ isLeft, onClick }) => {
  const margin = isLeft ? styles.leftBtn : styles.rightBtn;
  return (
    <div className={`${margin}`} style={{ zIndex: "10" }} onClick={onClick}>
      {isLeft ? <>&lsaquo;</> : <>&rsaquo;</>}
    </div>
  );
};

/**These are the dots at the bottom telling you which image you are on.*/
const BottomProgressIndicator = ({ images, currentIndex, setIndex }) => {
  let dots = images.map((_, i) => {
    const active = currentIndex == i ? styles["dot-active"] : "";
    return (
      <div
        key={i}
        className={`${styles.dot} ${active}`}
        onClick={() => setIndex(i)}
        style={{ transform: "translateX(-50%)" }}
      ></div>
    );
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        bottom: "16px",
        left: "45%",
      }}
    >
      {dots}
    </div>
  );
};

const DestinationsCarousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Go to next and previous slides with loopbacks.
  const next = () =>
    slideIndex == images.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);

  const prev = () =>
    slideIndex == 0
      ? setSlideIndex(images.length - 1)
      : setSlideIndex(slideIndex - 1);

  const imagesList = images.map((image, i) => (
    <div key={i}>
      <img src={image.imageUrl} style = {{height: "40%", width: "40%", marginTop: "5%", marginBottom: "5%"}}/>
      <h1 style = {{textAlign: "center"}}>{image.topicName}</h1>
    </div>
  ));

  return (
    <div style={{ height: "40%", width: "50%", position: "relative", marginLeft: "23%"}}>
      <SliderButton isLeft={true} onClick={prev} />
      <SliderButton isLeft={false} onClick={next} />

      <Carousel
        selectedItem={slideIndex}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        transitionTime={700}
      >
        {imagesList}
      </Carousel>
      <BottomProgressIndicator
        images={images}
        currentIndex={slideIndex}
        setIndex={setSlideIndex}
      />
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
};

export default DestinationsCarousel;