import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>{ children }</main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
