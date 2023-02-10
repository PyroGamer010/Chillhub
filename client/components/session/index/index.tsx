import styles from "./index.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";

import Navbar from "../../components/navbar/navbar";

const Index = () => {
    const { data: session, status } = useSession();

    

    return (
        <>
            <main>
                <Navbar />
                
                <button onClick={() => signOut()}>Log out</button><br />
            </main>
        </>
    );
}

export default Index;