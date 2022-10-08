import styles from '../../styles/product.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Product = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    if (!products) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/products`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [products])

  return (
    <section id="portfolio">
      <div className="container">
        <div className="col-md-8 mx-auto text-center">
          <h2 style={{ marginTop: 20 }} >SẢN PHẨM</h2>
          <strong>Các Sản Phẩm Của Công Ty TPONE</strong>
          <p>Đây là các sản phẩm mang tính chất minh họa, để biết thêm chi tiết quý khách vui lòng liên hệ qua số hotline
            0934782367 để được tư vấn trực tuyến về các sản phẩm mới nhất của công ty chúng tôi</p>
        </div>


        <div className="row g-3">
          {products?.map((product) => (
            <Link href={'/product/' + product.id}>
              <a className="col-lg-4 col-sm-6" key={product.id} >
              <div className={styles.project}>
                <img src={`${process.env.NEXT_PUBLIC_API}${product?.img[0]?.url}`} alt="" className={`${styles.product_img} img-fluid`} />
                <div className={styles.overlay}>
                  <div>
                    <h4 className="text-white">{product.name}</h4>
                  </div>
                </div>
              </div>
              </a>
            </Link>
          ))}
        </div>

      </div>
      <br></br>
    </section>
  );
}

export default Product;
