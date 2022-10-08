import React from "react";
import styles from "./style.module.css";

const Item = ({
    imgs = [],
    titles = [],
    dess = []
}) => {
    return (
        <div className={styles["item-container"]}>
            {
                imgs.length > 0 && titles.length > 0 && dess.length > 0 &&
                < div className={"row"}>
                    <div className="col-xl-4 col-sm-4">
                        <img alt="slider1" src={imgs[0]} />
                    </div>
                    <div className="col-xl-8 col-sm-8">
                        <h3>{titles[0]}</h3>
                        <div className={styles.des}>
                            <p>{dess[0]}</p>
                        </div>
                    </div>
                </div>
            }
            {
                imgs.length > 1 && titles.length > 1 && dess.length > 1 &&
                < div className={"row"}>
                    <div className="col-xl-4 col-sm-4">
                        <img alt="slider1" src={imgs[1]} />
                    </div>
                    <div className="col-xl-8 col-sm-8">
                        <h3>{titles[1]}</h3>
                        <div className={styles.des}>
                            <p>{dess[1]}</p>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Item
