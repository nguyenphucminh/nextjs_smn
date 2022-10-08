import Head from "next/head";
import styles from "./customer.module.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={styles.award} style={{ right: "30%" }} onClick={onClick}>
      <i className={`fa fa-angle-right ${styles.icon}`}></i>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={styles.award} style={{ left: "30%" }} onClick={onClick}>
      <i className={`fa fa-angle-left ${styles.icon}`}></i>
    </button>
  );
}

const array = [
  {
    content:
      "Tôi thấy mọi dịch vụ ở đây đều rất tuyệt. Hy vọng rằng Phòng khám sẽ tiếp tục cung cấp những dịch vụ tốt như vậy.",
    avatar: "/person1.png",
    name: "Anh Nguyễn Thanh Giàu",
  },
  {
    content:
      "Tôi thấy mọi dịch vụ ở đây đều rất tuyệt. Hy vọng rằng Phòng khám sẽ tiếp tục cung cấp những dịch vụ tốt như vậy. Tôi thấy mọi dịch vụ ở đây đều rất tuyệt. Hy vọng rằng Phòng khám sẽ tiếp tục cung cấp những dịch vụ tốt như vậy.",
    avatar: "/person2.png",
    name: "Chị Trần Hoàng Thơ",
  },
  {
    content:
      "Tôi thấy mọi dịch vụ ở đây đều rất tuyệt. Hy vọng rằng Phòng khám sẽ tiếp tục cung cấp những dịch vụ tốt như vậy.",
    avatar: "/person1.png",
    name: "Anh Nguyễn Trần Minh Trí",
  },
];
export default function CustomerTalkAbout() {
  return (
    <div className={styles.tz_partner} style={{ backgroundColor: "#f0f5f8" }}>
      <div style={{ backgroundColor: "#f0f5f8" }}>
        <p className={styles.title_partner} style={{ marginBottom: "0px" }}>
          Khách hàng nói gì về <strong>Phòng khám Mỹ Thạnh</strong>
        </p>
        <p
          className={styles.title_partner_content}
          style={{ marginBottom: "0px" }}
        >
          Đội ngũ bác sĩ nhiều năm kinh nghiệm, chuyên môn cao, luôn đặt bệnh
          nhân lên vị trí hàng đầu
        </p>
        <div className="container">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            autoplay={true}
            // speed={800}
            // autoplaySpeed={1000}
            cssEase="linear"
          >
            {array.map((_, i) => (
              <div className={styles.slide_item_customer} key={i}>
                <div className={styles.container_customer_img}>
                  <img
                    src={_.avatar}
                    alt="partler4"
                    className={styles.customer_img}
                  />
                </div>
                <p className={styles.content_k}>{_.content}</p>
                <h4 className={styles.customer_name}>
                  <span className={styles.customer_name_span}>{_.name}</span>
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
