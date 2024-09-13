"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";

/**
 * A carousel component for displaying a series of images.
 *
 * This component uses the `react-slick` library to create a responsive image
 * carousel. It accepts an array of image URLs as a prop and displays them
 * in a slideshow with navigation dots.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - An array of image URLs to display in the carousel.
 * @returns {JSX.Element} The rendered carousel component.
 */
const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    if (Array.isArray(images)) {
      setProductImages(images);
    }
    console.log("New Array", productImages);
  }, [images]);

  console.log(productImages);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {productImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full h-96 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

