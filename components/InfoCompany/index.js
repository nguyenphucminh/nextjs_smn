import React from "react";
import styles from "./style.module.css";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faHashtag,
  faLocationDot,
  faUser,
  faPhone,
  faCalendar,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";


const About = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    if (!about) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/about`)
        .then((response) => response.json())
        .then((data) => setAbout(data));
    }
  }, [about])
  const contentAbout= (about?.contents)?.replaceAll('/uploads/',`${process.env.NEXT_PUBLIC_API}/uploads/`)
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>GIỚI THIỆU</h2>
        <div className="row" style={{paddingBottom: '20px'}}>
            <div className="col-lg-6">
            <div className="about-content">
              {
                <table className="table table-hover">
                  <thead className={`table-light`}>
                    <tr>
                      <th className={styles.name} colSpan="2">CÔNG TY TRÁCH NHIỆM HỮU HẠN TPONE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className={styles.name}><FontAwesomeIcon icon={faEarth} fixedWidth size="1x" /> Tên Quốc Tế</th>
                      <td>{about?.namecompany}</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faHashtag} fixedWidth size="1x" />  Mã Số Thuế </th>
                      <td>{about?.taxcode}</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faLocationDot} fixedWidth size="1x" />  Địa Chỉ</th>
                      <td>{about?.address}</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faUser} fixedWidth size="1x" />  Giám Đốc</th>
                      <td>{about?.manager}</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faPhone} fixedWidth size="1x" />  Điện Thoại</th>
                      <td colSpan="2">{about?.phone}</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faCalendar} fixedWidth size="1x" /> Ngày Cấp</th>
                      <td colSpan="2">16/09/2019</td>
                    </tr>
                    <tr>
                      <th className={styles.name} scope="row"><FontAwesomeIcon icon={faInfoCircle} fixedWidth size="1x" /> Trạng Thái</th>
                      <td colSpan="2">{about?.state}</td>
                    </tr>
                  </tbody>
                </table>}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 skills-bar">
            <img src={`${process.env.NEXT_PUBLIC_API}${about?.img?.url}`} className={`img-fluid`} alt="..." />
          </div>
        </div>

        <div className="ck-content" dangerouslySetInnerHTML={{ __html: (about?.contents)?.replaceAll(`${process.env.NEXT_PUBLIC_API}`,'')?.replaceAll('/uploads/',`${process.env.NEXT_PUBLIC_API}/uploads/`)}}></div>        

      </div>

    </section>
  );
};

export default About;
