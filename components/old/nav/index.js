import React, { useState } from "react";
import styles from "./style.module.css";

const NavCustom = ({
    showNav
}) => {

    return (
        <div className="container" style={{
            // paddingTop: "5px",
        }}>
            <div className="row">
                <nav className={`navbar navbar-expand-lg navbar-light bg-light myNav ${styles.navCustom}`}>
                {/* <button className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        // onClick={() => setShowNav(s => !s)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className={`collapse navbar-collapse ${showNav ? "show" : ""} ${styles.aniNav}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link nav-link-custom " href="#">Trang chủ <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className={`nav-link dropdown-toggle nav-link-custom`}
                                    href="#"
                                >GIỚI THIỆU</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                                    <li><a className="dropdown-item" href="#">Tầm nhìn, sứ mệnh</a></li>
                                    <li><a className="dropdown-item" href="#">Vì sao nên chọn PKĐK Mỹ Thạnh</a></li>
                                    <li><a className="dropdown-item" href="#">Đội ngũ y bác sĩ</a></li>
                                    <li><a className="dropdown-item" href="#">Cơ sở vật chất</a></li>
                                    <li><a className="dropdown-item" href="#">Hợp tác quốc tế</a></li>
                                    <li><a className="dropdown-item" href="#">Quy trình khám bệnh</a></li>
                                    <li><a className="dropdown-item" href="#">Quy trình khám BHYT</a></li>
                                    <li><a className="dropdown-item" href="#">Hồ sơ năng lực phòng khám</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className={`nav-link dropdown-toggle nav-link-custom`}
                                    href="#"
                                >TIN TỨC</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                                    <li><a className="dropdown-item" href="#">Tầm nhìn, sứ mệnh</a></li>
                                    <li><a className="dropdown-item" href="#">Vì sao nên chọn PKĐK Mỹ Thạnh</a></li>
                                    <li><a className="dropdown-item" href="#">Đội ngũ y bác sĩ</a></li>
                                    <li><a className="dropdown-item" href="#">Cơ sở vật chất</a></li>
                                    <li><a className="dropdown-item" href="#">Hợp tác quốc tế</a></li>
                                    <li><a className="dropdown-item" href="#">Quy trình khám bệnh</a></li>
                                    <li><a className="dropdown-item" href="#">Quy trình khám BHYT</a></li>
                                    <li><a className="dropdown-item" href="#">Hồ sơ năng lực phòng khám</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#">DỊCH VỤ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#">HỎI ĐÁP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#">TUYỂN DỤNG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#">LIÊN HỆ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#">TRA CỨU HỒ SƠ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavCustom;