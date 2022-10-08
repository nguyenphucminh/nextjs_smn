import React from "react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
const TopHeader = () => {
  const [header, setHeader]= useState(null)

  useEffect(()=> {
    if(!header)
    {
      fetch(`${process.env.NEXT_PUBLIC_API}/header`)
        .then((response)=> response.json())
        .then((data)=> setHeader(data));
    }
  }, [header])
    return (
        <div className={styles["top-header"]}>

            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 ">
                        <div className="center-col">
                            <p>{header?.greeting}</p>
                        </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block ">
                        <p>{header?.worktime}</p>
                    </div>
                    <div className="col-xl-3 col-lg-6 ">
                        <div className={styles.ht}>
                            <p>
                                HOTLINE:
                                <strong>
                                    <a href="tel:0767.267.267"> {header?.hotline}</a>
                                </strong>
                            </p>
                            <div>
                                <img src="/images/vn.png" />
                                <img src="/images/en.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopHeader;