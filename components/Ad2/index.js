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
            backgroundImage: `url('${`${process.env.NEXT_PUBLIC_API}${ads[0]?.img2?.url}`}')`
        }}>
            <div className="container">
                <div className="row">
                    <div>
                        <h6 className={`display-4 text-white ${styles.text}`}>{ads[0]?.title2}</h6>
                        <a href="#" className={`btn btn-primary ${styles.button}`}>Bắt Đầu Đặt</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ad;

