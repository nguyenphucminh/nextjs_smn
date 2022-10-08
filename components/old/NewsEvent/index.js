import styles from "./news.module.css";
import Link from "next/link";

const NewsEvent = () => {
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
            Cập nhật những tin tức mới nhất của phòng khám và các thông tin sức
            khỏe hàng ngày
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className={styles.out_blog_item_left}>
              <div className={styles.blog_thumb_left}>
                <Link href="#">
                  <img src="/images/news2.jpg" className={styles.image} />
                </Link>
              </div>
              <div className={styles.content_blog_left}>
                <h3>
                  <Link href="#">
                    <a>
                      Phòng khám đa khoa Mỹ Thạnh đồng hành cùng Tổng cục Thể dục thể
                      thao khám sức khỏe định kỳ doanh nghiệp
                    </a>
                  </Link>
                </h3>
                <p>
                  {" "}
                  Theo các chuyên gia y tế, cơ thể con người là một cỗ máy phức
                  tạp. Giống như máy móc, mỗi cơ quan bộ phận đều cần được kiểm
                  tra, bảo dưỡng thường xuyên. Khám sức khỏe tổng quát sẽ giúp
                  theo dõi, kiểm tra sức khỏe hàng năm; phát hiện sớm và điều...
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
            <div className="mb-3">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src="/images/news2.jpg" className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>Bệnh Tay Chân Miệng có khả năng tái phát hay không?</a>
                    </Link>
                  </h3>
                  <p>
                    Có nhiều bậc cha mẹ chủ quan khi cho rằng trẻ đã từng bị
                    bệnh tay chân miệng sẽ không mắc lại lần...
                  </p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src="/images/news2.jpg" className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>
                        [Truyền hình trực tiếp] GIỮ MỘT TRÁI TIM KHOẺ CHO NGƯỜI
                        CAO TUỔI
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Tuổi tác có thể ảnh hưởng đến mọi bộ phận trên cơ thể, đặc
                    biệt là tim. Theo nghiên cứu, càng lớn tuổi, khả...
                  </p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className={styles.out_blog_item_right}>
                <div className={styles.blog_thumb_right}>
                  <Link href="#">
                    <img src="/images/news2.jpg" className={styles.image} />
                  </Link>
                </div>
                <div className={styles.content_blog_right}>
                  <h3>
                    <Link href="#">
                      <a>
                        Sâu răng ở trẻ em: Hãy nhận biết và điều trị lúc mới
                        chớm
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Chăm sóc răng miệng cho con trẻ là vấn đề mà các bậc cha mẹ
                    rất mực quan tâm. Bởi lẽ răng miệng liên...
                  </p>
                  <Link href="#">
                    <a style={{ color: "black" }}>
                      Xem thêm <i className={`fa fa-caret-right`}></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <iframe
            className="w-100 mt-3 mb-1"
            style={{ padding: "0 10px", border: "none" }}
            height="641"
            src="https://www.youtube.com/embed/kR0hDO0jvho?list=PLKZCbIdMlqrjOTj07pRWNJpJYicc7smEq&rel=0&autoplay=0&controls=1&mute=1"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
