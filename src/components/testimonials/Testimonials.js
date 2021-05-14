import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import Slider from "react-slick";
import Author from '../../assets/images/author-1.jpg';

export default function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <section id="testimonial" className="testimonial-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-10">
                            <h4 className="title">Testimonial</h4>
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings} >
                            <div className="single-testimonial mt-30 mb-30 text-center" >
                                <div className="testimonial-image">
                                    <img src={Author} alt="Author" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                    <h6 className="author-name">Elon Musk</h6>
                                    <span className="sub-title">CEO, SpaceX</span>
                                </div>
                            </div>
                            <div className="single-testimonial mt-30 mb-30 text-center" >
                                <div className="testimonial-image">
                                    <img src={Author} alt="Author" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                    <h6 className="author-name">Elon Musk</h6>
                                    <span className="sub-title">CEO, SpaceX</span>
                                </div>
                            </div>


                            <div className="single-testimonial mt-30 mb-30 text-center" >
                                <div className="testimonial-image">
                                    <img src={Author} alt="Author" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                    <h6 className="author-name">Elon Musk</h6>
                                    <span className="sub-title">CEO, SpaceX</span>
                                </div>
                            </div>



                            <div className="single-testimonial mt-30 mb-30 text-center" >
                                <div className="testimonial-image">
                                    <img src={Author} alt="Author" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                    <h6 className="author-name">Elon Musk</h6>
                                    <span className="sub-title">CEO, SpaceX</span>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
