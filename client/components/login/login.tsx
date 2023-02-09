import styles from "./login.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";


const Login = () => {
    const { data: session, status } = useSession();

    const [email, setEmail] = useState("");
    
    return (
        <div className={styles.flex}>
            <div className={styles.box}>
                <img src="/chillhub.png" alt="jpg" />

                <input type="text" placeholder="Email" onChange={ (e) => {
                setEmail(e.target.value);
                }} />
                <button className={styles.sign} onClick={ () => {
                signIn("email", { email: email}); 
                }}>Sign in</button>

                <button className={styles.discord} onClick={ () => {
                signIn("discord");
                }}><b>Log in met discord</b></button>
            </div>
        </div>
    );  
}

export default Login;