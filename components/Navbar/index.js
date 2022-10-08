import Link from 'next/link'
import styles from "./style.module.css";
import { links } from './data'
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    if (!about) {
      fetch(`${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_PREFIX_API ? `/${process.env.NEXT_PUBLIC_PREFIX_API}` : ''}/about`)
        .then((response) => response.json())
        .then((data) => setAbout(data));
    }
  }, [about])
  return (
    <section className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link href="/"><a ><img className={styles.logo} src={`${process.env.NEXT_PUBLIC_API}${about?.logo?.url}`} /></a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse`} id="navbarNav">
              <ul className={`navbar-nav ms-auto`}>
                {links.map((link) => {
                    return (
                      <li className={`nav-item ${styles.nav_li}`} key={link.id}>
                        <Link href={link.url}>
                          <a className={`nav-link ${styles.nav_a}`}>{link.text}</a>
                        </Link>

                        <ul className={styles.lv2}>{link.nav_item?.map(item=>
                          (<li className= {styles.nav_li_lv2} key={item?.id}><Link href={item?.url}>
                              <a className={`nav-link ${styles.nav_a_lv2}`} >{item?.text}</a>
                            </Link></li>))}
                        </ul>
                      </li> )})}
              </ul>
            </div>

      </nav>
    </section>
  )
}

export default Header;