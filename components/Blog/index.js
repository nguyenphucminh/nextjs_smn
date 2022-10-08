import React from "react";
import styles from "./style.module.css";
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

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <img src="/images/banner2.png" className="img-fluid" />
      </div>

    </section>
  );
};

export default About;
