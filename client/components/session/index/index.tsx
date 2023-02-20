/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./index.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";

import Navbar from "../../components/navbar/navbar";
import Taskbar from "../../components/taskbar/taskbar";
import Main from "../../components/main/main"; 

const Index = () => {
    const { data: session, status } = useSession();

    

    return (
        <>
            <main>
                <Navbar />
                <div className={styles.taskMain}>
                    <Taskbar />
                    <Main />
                </div>
            </main>
        </>
    );
}

export default Index;