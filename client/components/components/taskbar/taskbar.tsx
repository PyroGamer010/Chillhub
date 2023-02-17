/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './taskbar.module.scss'

import { BsFillPersonFill } from 'react-icons/bs'

import { signIn, signOut, useSession } from 'next-auth/react'

const Taskbar = () => {
    const { data: session, status } = useSession()

    return (
        <>
            <div className={styles.taskbar}>
                <div className={styles.flex}>
                    <div className={styles.pinned}>
                        
                        <div className={styles.pinnedItem}>
                            <BsFillPersonFill />
                            <div className={styles.text}>
                                {session?.user?.name} 
                                <div>
                                    genre
                                </div>
                            </div>
                            <div className={styles.viewer}>
                                <BsFillPersonFill />
                                <div>
                                    999
                                </div>
                            </div>
                        </div>

                        <div className={styles.pinnedItem}>
                            <BsFillPersonFill />
                            <div className={styles.text}>
                                {session?.user?.name} 
                                <div>
                                    genre
                                </div>
                            </div>
                            <div className={styles.viewer}>
                                <BsFillPersonFill />
                                <div>
                                    999
                                </div>
                            </div>
                        </div>

                        <div className={styles.pinnedItem}>
                            <BsFillPersonFill />
                            <div className={styles.text}>
                                {session?.user?.name} 
                                <div>
                                    genre
                                </div>
                            </div>
                            <div className={styles.viewer}>
                                <BsFillPersonFill />
                                <div>
                                    999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Taskbar