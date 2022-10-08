import React from "react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";


const Ad = () => {
    const [ads, setAds] = useState([]);
    useEffect(() => {
        if (ads.length < 1) {
            fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/ads`)
                .then((response) => response.json())
                .then((data) => setAds(data));
        }
    }, [ads])
    return (
        <div className={`align-items-center ${styles.hero}`} style={{
            backgroundImage: `url('${`${process.env.NEXT_PUBLIC_API}${ads[0]?.img1?.url}`}')`
        }}>
            <div className="container">
                <div className="row">
                    <div>
                        <p className="display-4 text-white">{ads[0]?.title1}</p>
                        <h6 className={styles.text}>{ads[0]?.content1}</h6>
                        <a href="https://pkdkmythanh.com/appointment/" target="_blank" className={`btn me-2 btn-primary ${styles.button}`}>Bắt Đầu Đặt</a>
                        <a href="#" className={`btn btn-outline-secondary ${styles.button}`}>Tư Vấn</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Ad;

