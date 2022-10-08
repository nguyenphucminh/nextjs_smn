import React from "react";
import AboutItem from "./aboutItem";
import styles from "./style.module.css";
import CacNganh from "./cac-nganh";
import Slider from "./slider";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <AboutItem
                iconClassName={styles["dien-thoai"]}
                title="Tổng đài tư vấn"
                des={"0763 963 868"}
                phone
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <AboutItem
                iconClassName={styles["dia-diem"]}
                title="Địa chỉ"
                des={
                  <>
                    2555-25557-25559 Trần Hưng Đạo <br />
                    TP.Long Xuyên - An Giang
                  </>
                }
                address
              />
            </div>
            <div
              className="col-lg-4 col-md-12"
              onClick={() => {
                console.log(
                  "window.location.host",
                  `${window.location.protocol}//${window.location.host}/appointment`
                );
                window.location.href = `${window.location.protocol}//${window.location.host}/appointment`;
              }}
            >
              <AboutItem
                iconClassName={styles["goi-tu-van"]}
                title="Đặt lịch khám"
                des="MAKE APPOINTMENT"
                book
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles["cac-nganh"]}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <CacNganh />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
