import styles from "./news.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const NewsEvent = () => {
  const [event, setEvent] = useState(null)

  useEffect(() => {
    if (!event) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/event`)
        .then((response) => response.json())
        .then((data) => setEvent(data));
    }
  }, [event])
  return (
    <section
      className="container-fluid"
      style={{ background: "#fff", padding: "20px 0 0px" }}
    >
      <div className="container">
        <div className="title text-center">
          <p className="f17">
            <strong>Tin tức - Sự kiện</strong> nổi bật
          </p>
          <p className="f13">
            Cập nhật những tin tức mới nhất của TPONE và các thông tin công nghệ hàng ngày
          </p>
        </div>

        <div className="row" style={{ padding: "20px 0 0px" }}>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className={styles.out_blog_item_left}>
              <div className={styles.blog_thumb_left}>
                <Link href="#">
                  <img src={`${process.env.NEXT_PUBLIC_API}${event?.imgmain?.url}`} className={styles.image} />
                </Link>
              </div>
              <div className={styles.content_blog_left}>
                <h3>
                  <Link href="#">
                    <a>
                      {event?.titlemain}
                    </a>
                  </Link>
                </h3>
                <p>
                  {" "}
                  {event?.contentmain}
                </p>
                <Link href="#">
                  <a style={{ color: "black" }}>
                    Xem thêm <i className={`fa fa-caret-right`}></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="mb-4">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src={`${process.env.NEXT_PUBLIC_API}${event?.img1?.url}`} className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>{event?.title1}</a>
                    </Link>
                  </h3>
                  <p>{event?.content1}</p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src={`${process.env.NEXT_PUBLIC_API}${event?.img2?.url}`} className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>{event?.title2}</a>
                    </Link>
                  </h3>
                  <p>{event?.content2}</p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src={`${process.env.NEXT_PUBLIC_API}${event?.img3?.url}`} className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>{event?.title3}</a>
                    </Link>
                  </h3>
                  <p>{event?.content3}</p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <iframe
            className="w-100 mt-3 mb-1"
            style={{ padding: "0 10px", border: "none" }}
            height="641"
            src="https://www.youtube.com/embed/kR0hDO0jvho?list=PLKZCbIdMlqrjOTj07pRWNJpJYicc7smEq&rel=0&autoplay=0&controls=1&mute=1"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
