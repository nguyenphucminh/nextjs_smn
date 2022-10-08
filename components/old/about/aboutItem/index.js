import React from "react";
import styles from "./style.module.css";

const AboutItem = ({
    title,
    des,
    iconClassName,
    address,
    phone,
    book
}) => {


    return (
        <div className={styles.itemContainer}>
            <div className={`${styles.ic} ${iconClassName}`}></div>
            <div className={`${styles.content}`}>
                <h3>{title}</h3>
                <div>
                    {
                        address && <p className={styles.resp}>{des}</p>
                    }
                    {
                        phone && <p><a href={`tel:tel:<strong>${des}</strong>`}><strong>{des}</strong></a></p>
                    }
                    {
                        book && <p>{des}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutItem;