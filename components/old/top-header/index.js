import React from "react";
import styles from "./style.module.css";

const TopHeader = () => {
    return (
        <div className={styles["top-header"]}>

            <div className="container">
                <div className="row">
                    <div className="col-xl-5 d-none d-xl-block">
                        <div className="center-col">
                            <p>Chào mừng bạn đến với Phòng khám Đa khoa Mỹ Thạnh</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6  col-sm-6  d-none d-xl-block">
                        <p>Giờ mở cửa: T2-T7/S:7h30-12h00/C:13h30-17h00</p>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className={styles.ht}>
                            <p>
                                HOTLINE:
                        <strong>
                                    <a href="tel:0763.963.868"> 0763.963.868</a>
                                </strong>
                            </p>
                            <div>
                                <img src="/images/vn.png" />
                                <img src="/images/en.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopHeader;