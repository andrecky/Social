import React from "react";
import Slider from "react-slick";
import img from "../../../images/avaFallout.jpg";
import style from "./Style.css";



const SimpleSlider = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 1,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className={style.hui}>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                         <img src={img} />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );

};

export default SimpleSlider;
