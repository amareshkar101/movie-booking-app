import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../styles/ImageCarousel.css";

function ImageCarousel({ images }) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    centerPadding: 0,
    centerMode: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div>
            <img src={img} alt={`slide ${idx + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
