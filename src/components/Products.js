import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router } from "react-router-dom";

const Products = () => {
    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                  infinite: true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1 ,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1 ,
                }
            }
          ]
    };

    const products = [
        './products/carousel1.svg',
        './products/carousel2.svg',
        './products/carousel1.svg',
        './products/carousel2.svg',
        './products/carousel1.svg',
        './products/carousel2.svg',
        './products/carousel1.svg',
        './products/carousel2.svg',
        './products/carousel1.svg',
        './products/carousel2.svg',
        './products/carousel1.svg',
        './products/carousel2.svg',
    ];

    return(
        <div id="gallery">
            <Router>
                <Slider {...settings}>

                    {products.map((src, index) => (
                        <div key={index} className="product">
                            <img src={ src } className="w-100" alt="Post-Apocalyptic Products" />
                        </div>
                    ))}

                </Slider >
            </Router>
        </div>
    );
}

export default Products;