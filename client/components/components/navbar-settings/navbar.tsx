/* eslint-disable @next/next/no-img-element */
import styles from "./navbar.module.scss";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

import { signIn, signOut, useSession } from "next-auth/react";

const Component = () => {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.Nav}>
      <div className={styles.left}>
        <IoSettingsSharp />
        <div> settings</div>
        <Link href="/">Home</Link>
      </div>
      
      <div className={styles.center}>
          <div className={styles.search}>
            <input type="text" />
            <button><FiSearch /></button>
          </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.profile}>
          <div className={styles.box}>Logged in as: {session?.user?.name}</div>
          <BsFillPersonFill />
        </div>
      </div>
    </nav>
  );
};
export default Component;
