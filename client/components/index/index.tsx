import styles from "./index.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";

const Index = () => {
    const { data: session, status } = useSession();

    

    return (
        <>
            <main>
                <h1>Welkom {session?.user?.name}</h1>
                <button onClick={() => signOut()}>Log out</button><br />
            </main>
        </>
    );
}

export default Index;