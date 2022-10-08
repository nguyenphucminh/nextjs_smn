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

export default function CustomerTalkAbout() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (customers.length < 1) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/customers`)
        .then((response) => response.json())
        .then((data) => setCustomers(data));
    }
  }, [customers])
  return (
    <div className={styles.tz_partner} style={{ backgroundColor: "#f0f5f8" }}>
      <div style={{ backgroundColor: "#f0f5f8" }}>
        <p className={styles.title_partner} style={{ marginBottom: "0px" }}>
          Khách hàng nói gì về <strong style={{ color: "#007bff" }}>CÔNG TY ADMIN</strong>
        </p>
        <p
          className={styles.title_partner_content}
          style={{ marginBottom: "0px" }}
        >
          Đội ngũ nhân viên nhiều năm kinh nghiệm, chuyên môn cao, luôn đặt khách hàng lên vị trí hàng đầu
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
            {customers.map((customer, i) => (
              <div className={styles.slide_item_customer} key={i}>
                <div className={styles.container_customer_img}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API}${customer?.avatar?.url}`}
                    alt="partler4"
                    className={styles.customer_img}
                  />
                </div>
                <p className={styles.content_k}>{customer?.comment}</p>
                <h4 className={styles.customer_name}>
                  <span className={styles.customer_name_span}>{customer?.name}</span>
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
