import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import styles from "./meeting.module.css";

const array = Array.from(Array(20), (x, index) => index + 1);

const MeetingDoctor = () => {
  const refSlider = useRef();
  const [widthWindow, setWidthWindow] = useState();

  useEffect(() => {
    const updateSize = () => setWidthWindow(window.innerWidth);

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      className={styles.meeting}
      style={{ background: "#f0f5f8", padding: "20px" }}
    >
      <div className="container">
        <div className="title text-center">
          <p className="f17">
            <Link href="#">
              <a style={{ color: "black" }}>
                Gặp gỡ các bác sĩ của <strong>Phòng khám Mỹ Thạnh</strong>
              </a>
            </Link>
          </p>
          <p className="f13">
            <a>
              Đội ngũ bác sĩ nhiều năm kinh nghiệm, chuyên môn cao, luôn đặt
              bệnh nhân lên vị trí hàng đầu
            </a>
          </p>
        </div>

        <Slider
          ref={refSlider}
          dots={false}
          infinite={true}
          speed={300}
          slidesToShow={widthWindow <= 768 ? 1 : 2}
          autoplay={true}
          cssEase="linear"
          arrows={false}
          focusOnSelect={false}
        >
          {array.map((data, index) => (
            <div className={styles.box_doctor} key={index}>
              <Link href="#">
                <a>
                  <img
                    src={`/news/doctor${data}.jpg`}
                    style={{ width: "100%" }}
                  />
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {widthWindow > 768 && (
        <>
          <button
            className={styles.btn_prev}
            onClick={() => refSlider.current.slickPrev()}
          >
            <i className={`fa fa-angle-left ${styles.icon}`}></i>
          </button>
          <button
            className={styles.btn_next}
            onClick={() => refSlider.current.slickNext()}
          >
            <i className={`fa fa-angle-right ${styles.icon}`}></i>
          </button>
        </>
      )}
    </section>
  );
};

export default MeetingDoctor;
