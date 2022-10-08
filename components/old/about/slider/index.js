import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../slider";
import Item from "./item";
import styles from "./style.module.css";

const data = [
    {
        titles: ["Khoa Nội", "Khoa Ngoại"],
        imgs: ["/images/khoa1.png", "/images/khoa2.png"],
        dess: [
            `Chuyên khoa Nội tổng quát tại phòng khám đa khoa Mỹ Thạnh có chức năng khám bệnh, 
            chẩn đoán, kê đơn điều trị và tư vấn các bệnh nội khoa bao gồm: tim mạch, hô hấp, tiêu hoá, 
            gan mật, thận - tiết niệu, thần kinh, cơ xương khớp, miễn dịch - dị ứng, . ..`,
            `Ngoại khoa của phòng khám đa khoa Mỹ Thạnh là nơi tiếp nhận các trường hợp cấp cứu, 
            khám chữa các bệnh lý về ngoại khoa theo phân cấp.`
        ]
    },
    {
        titles: ["Sản - Phụ Khoa", "Khoa Nhi"],
        imgs: ["/images/khoa3.png", "/images/khoa4.png"],
        dess: [
            `Tại phòng khám đa khoa Mỹ Thạnh, chúng tôi cũng cung cấp các dịch vụ trọn gói 
            và thủ thuật khác nhau nhằm điều trị hiệu quả, đảm bảo nhu cầu chăm sóc sức khỏe cho phụ nữ.`,
            `Tại phòng khám đa khoa Mỹ Thạnh, hồ sơ bệnh án của bé được lưu trữ và bảo mật 
            theo tiêu chuẩn quốc tế trên phần mềm bệnh án điện tử hiện đại.`
        ]
    },
    {
        titles: ["Da Liễu", "Khoa Mắt"],
        imgs: ["/images/khoa5.png", "/images/khoa6.png"],
        dess: [
            `Chuyên khoa da liễu Phòng khám đa khoa Dr.Binh Tele_Clinic chẩn đoán và điều trị các bệnh 
            ngoài da thường gặp cũng như tư vấn phương pháp chăm sóc các vấn đề về da.`,
            `Phòng khám Mắt tại phòng khám đa khoa Dr. Binh Tele_Clinic được trang bị thiết bị hiện đại, 
            đồng bộ của hãng Shin Nippon, hãng sản xuất thiết bị mắt hàng đầu tại Nhật Bản.`
        ]
    },
    {
        titles: ["Chẩn Đoán Hình Ảnh", "Nội Soi Tiêu Hóa"],
        imgs: ["/images/khoa11.png", "/images/khoa12.png"],
        dess: [
            `Chuyên khoa chẩn đoán hình ảnh của phòng khám đa khoa Mỹ Thạnh 
            hỗ trợ về chuẩn đoán thuộc lĩnh vực hình ảnh, cũng như một số 
            công việc về điều trị can thiệp.`,
            `Với đội ngũ bác sĩ chuyên khoa sâu về tiêu hóa, Phòng khám có thế mạnh trong việc chẩn đoán 
            và điều trị các bệnh về Tiêu hóa (Dạ dày, đại tràng, Gan mật).`
        ]
    }
]

const SliderCustom = () => {
    return (
        <div className={`${styles.container}`}>
            <Slider
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                slidesToShow={2}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
            > 
                 {
                    data.map((d, index) =>
                        <Item imgs={d.imgs} titles={d.titles} dess={d.dess} key={index} />
                    )
                }
             </Slider> 
        </div>
    )
}

export default SliderCustom