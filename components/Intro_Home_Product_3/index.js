import styles from "./introProSer.module.css";
import { useEffect, useRef, useState } from "react";


export default function IntroProductService() {

  const [intros, setIntros] = useState([]);
  useEffect(() => {
    if (intros.length < 1) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/products`)
        .then((response) => response.json())
        .then((data) => setIntros(data));
    }
  }, [intros])

  const count = intros.length;

  return (
    <div className="row">
                  {intros.map((intro, index) => (

                    <div
                      className={`d-flex col-md-6 col-sm-6 ${styles.laster_shop_item}`} key={index}
                    >
                      <div className={styles.laster_thumb_4}>
                        <a href="#">
                          <img
                            className={styles.laster_thumb__img}
                            src={`${process.env.NEXT_PUBLIC_API}${intro?.img?.url}`}
                            alt={intro.title}
                            wiintroh="100%"
                          />
                        </a>
                    </div>
                    </div>
                  ))}
    </div>
  );


}
