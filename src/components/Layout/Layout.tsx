import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import SideBar from "../SideBar/SideBar.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sideBar}>
        <SideBar />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
