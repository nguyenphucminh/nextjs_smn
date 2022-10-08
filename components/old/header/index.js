import React, { useState } from "react";
import Nav from "../nav";
import styles from "./style.module.css";

const Header = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <header className={`${styles.headerV1} ${styles.headerV2}`}>
            <div className={styles.overlayout}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                        <div className="center-col">
                            <h3>
                                <img src="/images/header-main-logo.png" alt="logo-pkmt" width="90%" />
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 d-none d-md-block">
                        <div className="center-col">
                            <h1 className={styles.headerTip} style={{
                                textAlign: "center",
                                // fontSize: "30px"
                            }}>UY TÍN - CHẤT LƯỢNG - TẬN TÂM</h1>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-8 col-8">
                        <div className={`${styles.icons}`}>
                            <a>
                                <i className="fa fa-st fa-key"></i>
                            </a>
                            <a style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                            }}>
                                <i className="fa fa-st fa-shopping-cart"></i>
                                {/* <span id="cart-total">0</span> */}
                            </a>
                            <a>
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                        <div className="row">
                            <div className={`center-col ${styles.btnNavContainer}`}>
                                <button className={`${styles.btnNav}`}
                                    type="button"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={() => setShowNav(s => !s)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Nav showNav={showNav} />
        </header>
    )
}

export default Header;