import styles from "./index.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";

import Navbar from "../../components/navbar/navbar";
import Taskbar from "../../components/taskbar/taskbar";

const Index = () => {
    const { data: session, status } = useSession();

    

    return (
        <>
            <main>
                <Navbar />
                <Taskbar />
            </main>
        </>
    );
}

export default Index;