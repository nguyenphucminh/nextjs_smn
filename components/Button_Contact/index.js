import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
const ButtonContact  = () => {
    return (
<div className={styles.hotline_phone_ring_wrap}>

    {/* Mess */}
    <div className={styles.hotline_mess_ring}>
        <div className={styles.hotline_mess_ring_circle}></div>
        <div className={styles.hotline_mess_ring_circle_fill}></div>
        <div className={styles.hotline_mess_ring_img_circle}>
        <a href="https://m.me/nocodebuilding/" className={styles.pps_btn_img}>
            <img src="https://nocodebuilding.com/wp-content/uploads/2020/07/fb.png" alt="Chat mess"/>
        </a>
        </div>
    </div>
    
    {/* Zalo */}
    <div className={styles.hotline_zalo_ring}>
        <div className={styles.hotline_zalo_ring_circle}></div>
        <div className={styles.hotline_zalo_ring_circle_fill}></div>
        <div className={styles.hotline_zalo_ring_img_circle}>
        <a href="http://zalo.me/0792766304"  target="_blank" className={styles.pps_btn_img}>
            <img src="https://nocodebuilding.com/wp-content/uploads/2020/07/zl.png" alt="Chat zalo"/>
        </a>
        </div>
    </div>
    
    {/* Phone */}
    <div className={styles.hotline_phone_ring}>
        <div className={styles.hotline_phone_ring_circle}></div>
        <div className={styles.hotline_phone_ring_circle_fill}></div>
        <div className={styles.hotline_phone_ring_img_circle}>
        <a href="tel:0792766304" target="_blank" className={styles.pps_btn_img}>
            <img src="https://nocodebuilding.com/wp-content/uploads/2020/07/icon-call-nh.png" alt="Call Phone"/>
        </a>
        </div>
    </div>
    <div className={styles.hotline_bar}>
        <a href="tel:0792766304">
            <span className={styles.text_hotline}>0792766304</span>
        </a>
    </div>
</div>
    
    )
}
export default ButtonContact;

