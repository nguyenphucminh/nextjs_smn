import React from "react";
import styles from "./style.module.css";
import Slider from "react-slick";
import Link from "next/link";
import { useEffect, useState } from "react";

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
const BannerCustom = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        if (banners.length < 1) {
            fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/banners`)
                .then((response) => response.json())
                .then((data) => setBanners(data));
        }
    }, [banners])


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
                {banners.map((banner, index) => (
                    <img className={`d-block w-100 img-fluid ${styles.banner_img}`} key={index} src={`${process.env.NEXT_PUBLIC_API}${banner?.img?.url}`}>
                    </img>
                ))}
            </Slider>



        </div>

    )
}
export default BannerCustom;

