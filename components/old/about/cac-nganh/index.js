import React from "react";
import Item from "./item";
import styles from "./style.module.css";

const CacNganh = () => {
    return (
       <div className={styles.container}>
            <ul>
            <Item backgroundColor="#f79122">
                Các gói khám sức khỏe
            </Item>
            <Item backgroundColor="#025b85">
                Bảo hiểm y tế - Bảo lãnh viện phí
            </Item>
            <Item backgroundColor="#ef3a33">
                Dịch vụ Y tế Cơ quan – MEDI-OFFICE
            </Item>
            <Item backgroundColor="#9dce59">
                Dịch vụ y tế Gia đình - MEDI-HOME
            </Item>
            <Item backgroundColor="#946db0">
                Thiết bị y tế gia đình
            </Item>
            <Item backgroundColor="#ea706d">
                Tầm soát ung thư
            </Item>
            <Item backgroundColor="#1f7320">
                Thư viện hình ảnh
            </Item>
        </ul>
       </div>
    )
}

export default CacNganh