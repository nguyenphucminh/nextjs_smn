import React, { memo } from "react";
import styles from "./style.module.css";

const Item = ({
    children,
    backgroundColor
}) => {
    return (
        <li className={styles.item} style={{
            background: backgroundColor
        }}>
            <a href="/">{children}</a>
        </li>
    )
}

export default memo(Item);