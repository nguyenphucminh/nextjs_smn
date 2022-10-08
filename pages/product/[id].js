import styles from '../../styles/product_detail.module.css'
import ImageGallery from 'react-image-gallery';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faCheckCircle,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

export default function Details() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)
  useEffect(() => {
    if (!product && id) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [product, id])
  const images = product?.img.map(item=>
    ({  
      original : `${process.env.NEXT_PUBLIC_API}${item?.url}`,
      thumbnail:`${process.env.NEXT_PUBLIC_API}${item?.url}`,
      // originalHeight: '200px',
      // originalWidth: '200px',
    })) 
    console.log(images)
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-md-12 skills-bar">
          {images !== undefined ? <ImageGallery items={images} showPlayButton= {false} showFullscreenButton={false} /> : <></>}
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <h2 className={styles.title}>{product?.name}</h2>
            </div>

            <a href="/product" className={`${styles.product_link}`}>đi đến trang sản phẩm</a>
            <div className={`${styles.product_detail}`}>
              <h4>Thông tin sản phẩm: </h4>
              <div className="ck-content" dangerouslySetInnerHTML={{ __html: (product?.detail)?.replaceAll(`${process.env.NEXT_PUBLIC_API}`,'')?.replaceAll('/uploads/',`${process.env.NEXT_PUBLIC_API}/uploads/`)}}></div>        
            </div>


            <div className={`${styles.purchase_info}`}>
              <a href="tel:0767267267">
                <button type="button" className={`${styles.btn} btn btn-primary`}>
                  Đặt Hàng  <i><FontAwesomeIcon icon={faPhone} fixedWidth size="1x" /></i>
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};
