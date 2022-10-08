import React from "react";
import styles from "./style.module.css";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

};
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={styles.award} style={{ right: "50px" }} onClick={onClick}>
            <i className={`fa fa-angle-right ${styles.icon}`}></i>
        </button>
    );
}

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={styles.award} style={{ left: "50px" }} onClick={onClick}>
            <i className={`fa fa-angle-left ${styles.icon}`}></i>
        </button>
    );
}
const SliderCustom = () => {
    return (
        <div className={styles.slider}>
            <Slider {...settings}
                nextArrow={<NextArrow />}
                speed={500}
                autoplay={true}
                prevArrow={<PrevArrow />}
                dotsClass={`${styles["dot-hidden"]}`}
                className={styles.mySlider}
                >
                <img className="d-block w-100"
                    src="/images/banner2.png"
                    alt="First slide" />
                <img className="d-block w-100"
                    src="/images/banner1.png"
                    alt="Second slide" />
                <img className="d-block w-100"
                    src="/images/banner3.png"
                    alt="Second slide" />
            </Slider>
        </div>
    )
}

export default SliderCustom;