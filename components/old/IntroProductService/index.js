import Head from "next/head";
import styles from "./introProSer.module.css";

const data = [
  {
    content1: "GÓI KHÁM SỨC KHOẺ",
    content2: "CÁ NHÂN",
    image: "/service1.png",
  },
  {
    content1: "GÓI KHÁM SỨC KHOẺ ĐỊNH KỲ",
    content2: "CHO NGƯỜI LAO ĐỘNG",
    image: "/service2.png",
  },
  {
    content1: "GÓI CHÍCH NGỪA",
    content2: "BẢO VỆ SỨC KHOẺ",
    image: "/service3.png",
  },
  {
    content1: "GÓI KHÁM SỨC KHOẺ",
    content2: "CÁ NHÂN",
    image: "/service4.png",
  },
];
export default function IntroProductService() {
  return (
    <section className={`${styles.tz_lastest_shop} ${styles.theme_white}`}>
      <h2 className={styles.tz_title_3}>
        Giới thiệu sản phẩm-dịch vụ tốt cho bạn
      </h2>
      <div className="container">
        <div className="row">
          {data.map((dt, i) => (
            <div
              className={`col-lg-3 col-md-6 col-sm-6 col-xs-12 ${styles.laster_shop_item}`} key={i}
            >
              <div className={styles.laster_thumb}>
                <a href="#">
                  <img
                    className={styles.laster_thumb__img}
                    src={dt.image}
                    alt={dt.content}
                    width="100%"
                  />
                </a>
                <span className={styles.tz_shop_meta}>
                  <a href="#" className={`${styles.tzheart}`}>
                    <div className={styles.bg_yellow}>
                      <i className={`fa fa-eye ${styles.icon}`}></i>
                    </div>
                  </a>
                </span>
              </div>
              <h3 className={styles.laster_shop_item__h3}>
                <a href="#" className={styles.title_a}>
                  {dt.content1}
                  <br />
                  {dt.content2}
                </a>
              </h3>
              <small className={styles.laster_shop_item__small}>Liên hệ</small>
            </div>
          ))}
        </div>
      </div>
      <a href="#" className={styles.tz_view_more2}>
        <span className={styles.span}>XEM THÊM</span>
      </a>
    </section>
  );
}
