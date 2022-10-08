import Navbar from "./Navbar";
import Footer from "./Footer";
import TopHeader from "./TopHeader";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import ButtonContact from "./Button_Contact";
const Layout= ({ children }) => {
    return (
        <div className={styles.container}>
        <Head>
          <link rel="shortcut icon" href="/images/header-main-logo.png" />
          <title>Admin COMPANY</title>
        </Head>
        <TopHeader/>
        <Navbar/>
        <ButtonContact/>
        { children }
        <Footer/>
        </div>
    );
}
export default Layout;