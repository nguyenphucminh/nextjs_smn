import Head from "next/head";
import styles from "./partner.module.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
// import Customer1 from "../../assets/customer_1.jpg";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={styles.award} style={{ right: 0 }} onClick={onClick}>
      <i className={`fa fa-angle-right ${styles.icon}`}></i>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={styles.award} style={{ left: 0 }} onClick={onClick}>
      <i className={`fa fa-angle-left ${styles.icon}`}></i>
    </button>
  );
}

const array = new Array(6).fill(0);
export default function PartnerCustomer() {
  const [show, setShow] = useState(5);
  const refWidth = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    if (window.innerWidth <= 470) {
      setShow(2);
    } else if (window.innerWidth <= 768) {
      setShow(3);
    } else {
      setShow(5);
    }
  };
  return (
    <div
      className={styles.tz_partner}
      style={{ backgroundColor: "#f0f5f8" }}
      ref={refWidth}
    >
      <div style={{ backgroundColor: "#f0f5f8" }}>
        <p className={styles.title_partner} style={{ marginBottom: "0px" }}>
          Chúng tôi tự hào là đối tác tin cậy của:
        </p>
        <div className="container">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={show}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            autoplay={true}
            cssEase="linear"
          >
            {array.map((_, i) => (
              <div className={styles.slide_item} key={i}>
                <a href="#">
                  <img
                    src={`/customer${i + 1}.jpg`}
                    className={styles.img_customer}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
