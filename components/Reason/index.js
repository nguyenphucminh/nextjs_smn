import React from "react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileMedical,
    faShield,
    faMedal,
    faCircleDollarToSlot,
    faPhone,
    faGears,

} from "@fortawesome/free-solid-svg-icons";
const Reason = () => {
    const [reasons, setReasons] = useState([]);
    useEffect(() => {
        if (reasons.length < 1) {
            fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/reasons`)
                .then((response) => response.json())
                .then((data) => setReasons(data));
        }
    }, [reasons])

    return (
        <section id="services">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h2 className={styles.title}>LÝ DO CHỌN CHÚNG TÔI</h2>
                        <h5 className={styles.tz_title_3}>{reasons[0]?.content1}</h5>
                    </div>
                </div>

                <div className="row g-4">
                    {/* reason 1 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faFileMedical} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title1}</h5>
                            <p>{reasons[0]?.content1}</p>
                        </div>
                    </div>
                    {/* reason 2 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faShield} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title2}</h5>
                            <p>{reasons[0]?.content2}</p>
                        </div>
                    </div>
                    {/* reason 3 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faMedal} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title3}</h5>
                            <p>{reasons[0]?.content3}</p>
                        </div>
                    </div>
                    {/* reason 4 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faCircleDollarToSlot} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title4}</h5>
                            <p>{reasons[0]?.content4}</p>
                        </div>
                    </div>
                    {/* reason 5 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faPhone} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title5}</h5>
                            <p>{reasons[0]?.content5}</p>
                        </div>
                    </div>
                    {/* reason 6 */}
                    <div className="col-lg-4 col-sm-6">
                        <div className={`${styles.service} ${styles.card_effect} ${styles.bounceInUp}`}>
                            <div className={styles.iconbox}>
                                <FontAwesomeIcon icon={faGears} fixedWidth size="1x" />
                            </div>
                            <h5 className="mt-4 mb-2">{reasons[0]?.title6}</h5>
                            <p>{reasons[0]?.content6}</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </section>
    )
}
export default Reason;

