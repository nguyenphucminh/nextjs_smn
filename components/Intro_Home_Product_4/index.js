import Head from "next/head";
import styles from "./introProSer.module.css";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link'
import { getWidth } from "react-slick/lib/utils/innerSliderUtils";
export default function IntroProductService() {
  const [intros, setIntros] = useState([]);
  useEffect(() => {
    if (intros.length < 1) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/products`)
        .then((response) => response.json())
        .then((data) => setIntros(data));
    }

  }, [intros])
  const count = intros.filter(intro => intro.superproduct === true).length;
  return (
    <section className={`${styles.tz_lastest_shop} ${styles.theme_white}`}>
      <h2 className={styles.title}>TPONE COMPANY</h2>
      <h5 className={styles.tz_title_3}>
        Giới thiệu sản phẩm-dịch vụ tốt cho bạn
      </h5>
      <div className="container">
        <div className="row">

          {intros.filter(intro => intro.superproduct === true).map((intro, i) => (
            <div
              className={`${count == 4 ? `col-lg-3 col-md-6 col-sm-6 col-xs-12 ` : count == 3 ? `col-lg-4 col-md-4 col-sm-12 col-xs-12` : `col-lg-6 col-md-6 col-sm-12 col-xs-12`} ${styles.laster_shop_item}`} key={i}>
              <div className={`${count == 4 ? `${styles.laster_thumb_4}` : count == 3 ? `${styles.laster_thumb_3}` : `${styles.laster_thumb}`}`}>
                <Link href={'/product/' + intro.id}>
                  <img
                    className={styles.laster_thumb__img}
                    src={`${process.env.NEXT_PUBLIC_API}${intro?.img[0]?.url}`}
                    alt={intro.name}
                    wiintroh="100%"
                  />
                </Link>
                <span className={styles.tz_shop_meta}>
                  <Link href={'/product/' + intro.id} className={`${styles.tzheart}`}>
                    <div className={styles.bg_yellow}>
                      <i className={`fa fa-eye ${styles.icon}`}></i>
                    </div>
                  </Link>
                </span>
              </div>
              <h3 className={styles.laster_shop_item__h3}>
                <Link href={'/product/' + intro.id}>
                  <a className={styles.title_a}>
                  {intro.name}
                  </a>
                </Link>
              </h3>
              <a href="tel:0767267267" >
              <button className={styles.customBtn}>Liên Hệ</button>
              </a>
            </div>
          ))}
        </div>
      </div>
      <a href="/about" className={styles.tz_view_more2}>
        <span className={styles.span}>TÌM HIỂU THÊM VỀ TPONE</span>
      </a>
    </section>

  );


}
