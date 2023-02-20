import styles from "./main.module.scss";

import Img from "../../../src/media/img.jpg";

import Image from 'next/image';
import { useSession } from "next-auth/react";



const Main = () => {
    const { data: session, status } = useSession()

    return (
        <>
            <div className={styles.main}>
                <main>
                    <div className={styles.row}>
                        <p>Hardcore</p>
                        <div className={styles.rowItem}>
                            <Image className={styles.stream} src={Img} alt="png"/>
                            <div className={styles.box}>
                                {session?.user?.image != undefined && (<img className={styles.pfp} src={session?.user?.image} alt="jpg/png" />)}
                                <div className={styles.text}>
                                    <h1>{session?.user?.name}</h1>
                                    <h2>We are going to do allot of fun like put chocalde in peanut butter and eat it</h2>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rowItem}>
                            <Image className={styles.stream} src={Img} alt="png"/>
                            <div className={styles.box}>
                                {session?.user?.image != undefined && (<img className={styles.pfp} src={session?.user?.image} alt="jpg/png" />)}
                                <div className={styles.text}>
                                    <h1>{session?.user?.name}</h1>
                                    <h2>We are going to do allot of fun like put chocalde in peanut butter and eat it</h2>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rowItem}>
                            <Image className={styles.stream} src={Img} alt="png"/>
                            <div className={styles.box}>
                                {session?.user?.image != undefined && (<img className={styles.pfp} src={session?.user?.image} alt="jpg/png" />)}
                                <div className={styles.text}>
                                    <h1>{session?.user?.name}</h1>
                                    <h2>We are going to do allot of fun like put chocalde in peanut butter and eat it</h2>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rowItem}>
                            <Image className={styles.stream} src={Img} alt="png"/>
                            <div className={styles.box}>
                                {session?.user?.image != undefined && (<img className={styles.pfp} src={session?.user?.image} alt="jpg/png" />)}
                                <div className={styles.text}>
                                    <h1>{session?.user?.name}</h1>
                                    <h2>We are going to do allot of fun like put chocalde in peanut butter and eat it</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;