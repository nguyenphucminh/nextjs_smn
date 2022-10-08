import Head from "next/head";
import styles from "./footer.module.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [text, setText] = useState("");
  return (
    <footer className={styles.footer}>
      <div className={styles.tz_footer_content}>
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-6 col-md-8 col-sm-8 col-xs-12 ${styles.footer_item}`}
            >
              <p className={styles.footer_p}>
                Copyright © {(new Date()).getFullYear()} Phòng khám Đa khoa Mỹ Thạnh. All rights
                reserved.
              </p>
              <h3 className={styles.module_title}>
                {/* <img src="/footer_logo.png" alt="logo-footer" /> */}
                <span className={styles.footer_span}>
                  PHÒNG KHÁM ĐA KHOA MỸ THẠNH
                  {/* <p className={styles.footer_p}>
                    Giám đốc chi nhánh: Bà NGUYỄN THÚY LAN
                  </p>
                  <p className={styles.footer_p}>
                    Mã số chi nhánh: 0102398721-001
                    <br />
                    Nơi cấp: Sở Kế hoạch đầu tư - TP Long Xuyên Cấp ngày: 11-8-2014
                  </p> */}
                </span>
              </h3>
              <div className={styles.tzwidget_contact}>
                <address className={styles.widget_address}>
                  <strong>Địa chỉ: </strong>
                  Số 2555, 2557, 2559 Trần Hưng Đạo, Tổ 12, Khóm Đông Thạnh B,
                  P. Mỹ Thạnh, TP. Long Xuyên, Tỉnh An Giang
                </address>
                <span className={styles.footer_span}>
                  {/* <strong>HOTLINE: 1900 9204 | Điện thoại: </strong>
                  <span className={styles.footer_p}>
                    (024)-3.622.77.99 -
                  </span>{" "} */}
                  <strong>Điện thoại: </strong>
                  <span className={styles.footer_p}>0763.963.868</span>
                  <br />
                </span>
                <a
                  className={styles.footer_a}
                  href="mailto:<strong>Email: </strong>info@pkdkmythanh.com | support@pkdkmythanh.com<br><strong>Website: </strong>www.pkdkmythanh.com "
                  target="_top"
                >
                  <strong>Email: </strong>pkdkmythanh@gmail.com
                  {/* <br />
                  <strong>Website: </strong>www.pkdkmythanh.com{" "} */}
                </a>
                <br />
                <a
                  className={styles.footer_a}
                  href="www.pkdkmythanh.com"
                  target="_top"
                >
                  {/* <strong>Email: </strong>info@pkdkmythanh.com | support@pkdkmythanh.com
                  <br /> */}
                  <strong>Website: </strong>pkdkmythanh.com
                </a>
                <br />
                <a
                  className={styles.footer_a}
                  href="www.facebook.com/pkdkmythanh"
                  target="_top"
                >
                  {/* <strong>Email: </strong>info@pkdkmythanh.com | support@pkdkmythanh.com
                  <br /> */}
                  <strong>Fanpage: </strong>facebook.com/pkdkmythanh
                </a>
                <div style={{
                  marginBottom: '5px'
                }}>
                  <img src="/images/qrcode_fanpage_m.jpeg" height={110} alt='qrcode_fanpage_m.jpeg' />
                </div>
                <p className={styles.footer_p}>
                  Giờ làm việc: Từ Thứ Hai đến Thứ Bảy hàng tuần <br />
                  Sáng: 7h30 đến 12h00 - Chiều: 13h30 - 17h00
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 ${styles.footer_item}`}
                >
                  <br />
                  <a
                    className={styles.footer_a}
                    href="/chinh-sach-va-quy-dinh-chung"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    * Chính sách &amp; quy định chung
                  </a>
                  <br />
                  <a
                    className={styles.footer_a}
                    href="/hinh-thuc-thanh-toan"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    * Quy định &amp; hình thức thanh toán
                  </a>
                  <br />
                  <a
                    className={styles.footer_a}
                    href="/chinh-sach-bao-mat-thong-tin-ca-nhan"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    * Chính sách bảo mật thông tin cá nhân
                  </a>
                  <br />
                  <br />
                  <a href="#" target="_blank">
                    <img
                      src="/bo_cong_thuong.png"
                      alt="da-thong-bao-bo-cong-thuong"
                      style={{
                        width: "200px",
                        height: "auto",
                      }}
                    />
                  </a>
                </div>
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 ${styles.footer_item}`}
                >
                  <div className={styles.text_widget}>
                    <iframe
                      className={styles.iframe}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.036749512029!2d105.47121155076861!3d10.338944192583064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a73d72c078c0d%3A0xb4010eefb4db3a38!2zUEjDkk5HIEtIw4FNIMSQQSBLSE9BIE3hu7ggVEjhuqBOSA!5e0!3m2!1svi!2s!4v1614742422059!5m2!1svi!2s"
                      width="600"
                      height="270"
                      style={{ border: 0 }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <br />
            <a
              style={{ color: "#fff", textAlign: "center", width: "100%" }}
              className={styles.padding10}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontFamily: "Baomoi",
                  textAlign: "center",
                }}
              >
                *Các thông tin y tế trên pkdkmythanh.com chỉ mang tính chất tham
                khảo, khi áp dụng phải tuyệt đối tuân theo chỉ dẫn của Bác sĩ.
                Chúng tôi tuyệt đối không chịu bất cứ trách nhiệm nào do việc tự
                ý áp dụng các thông tin trên pkdkmythanh.com gây ra.
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.form_f}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className={styles.search}>
                <form action="/search" method="get">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    name="query"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="tz-search-input"
                    className={styles.tz_search_input}
                  />
                  <input className={styles.hidden} type="submit" value="" />
                  <i className={`fa fa-search ${styles.search_i}`}></i>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className={styles.list_f}>
                <a href="/" className={styles.list_f_a}>
                  Trang chủ
                </a>
                <a
                  href="http://yhocvasuckhoe.net/"
                  target="_blank"
                  className={styles.list_f_a}
                >
                  Giới thiệu
                </a>
                <a href="/dichvu" title="Dịch vụ" className={styles.list_f_a}>
                  Dịch vụ
                </a>
                <a className={styles.list_f_a} href="/tintuc" title="Tin tức">
                  Tin tức
                </a>
                <a
                  className={styles.list_f_a}
                  href="/tuyendung"
                  title="Tuyển dụng"
                >
                  Tuyển dụng
                </a>
                <a className={styles.list_f_a} href="/banggia" title="Bảng giá">
                  Bảng giá
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
