import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import styles from "./meeting.module.css";


const Meeting = () => {

  const refSlider = useRef();
  const [widthWindow, setWidthWindow] = useState();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const updateSize = () => setWidthWindow(window.innerWidth);

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (employees.length < 1) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/employees`)
        .then((response) => response.json())
        .then((data) => setEmployees(data));
    }
  }, [employees])

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
                Gặp gỡ các nhân sự của <strong style={{ color: "#007bff " }} >ADMIN</strong>
              </a>
            </Link>
          </p>
          <p className="f13" style={{ paddingBottom: "20px" }}>
            <a>
              Đội ngũ nhân sự nhiều năm kinh nghiệm, chuyên môn cao, luôn đặt
              khách hàng lên vị trí hàng đầu
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
          {employees.map((employee, index) => (
            <div className={styles.box_doctor} key={index}>
              <Link href="#" >
                <a >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API}${employee?.img?.url}`}
                    className={styles.img}
                  />
                  <ul className={styles.container}>
                    <li className={styles.name}>{employee?.name}</li>
                    <li className={styles.title}>{employee?.department}  {employee?.note}</li>
                  </ul>

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

export default Meeting;
