import styles from "./navbar.module.scss";
import Link from "next/link";
const Component = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Left}>
        <img src="/chillhub.png" alt="Logo" />
      </div>
      <div className={styles.Center}>
        <div className={styles.Top}>Kaas</div>
        <div className={styles.Bottom}>Kaas</div>
      </div>
      <div className={styles.Right}>
        <Link href={"/login"}>Log in /Sign up</Link>
      </div>
    </nav>
  );
};
export default Component;
