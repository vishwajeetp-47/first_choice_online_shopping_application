import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import myntra from './Images/myntra.png';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageSlider() {

  const images = [myntra, img3, img4, img1, img2];

  return (
    <div>
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true} // Enable automatic slide transitions
            interval={3000} // Set the interval in milliseconds
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    </div>
  )
}
