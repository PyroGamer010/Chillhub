/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './taskbar.module.scss'

import { BsFillPersonFill } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import { ImFire } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { FaSearch } from "react-icons/fa"

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Taskbar = () => {
    const { data: session, status } = useSession()

    return (
        <>
            <div className={styles.taskbar}>
                <div className={styles.flex}>
                    <div className={styles.pinned}>
                        <p>Pinned</p>                   
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
                                    264
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
                                    87
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
                                    1328
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boxMiddle}>
                        <div className={styles.boxCenter}>
                            <div className={styles.boxItem}>
                                <AiFillStar />
                                <Link href="#" className={styles.link}>Favorites</Link>
                            </div>

                            <div className={styles.boxItem}>
                                <MdFavorite />
                                <Link href="#" className={styles.link}>Following</Link>
                            </div>

                            <div className={styles.boxItem}>
                                <ImFire />
                                <Link href="#" className={styles.link}>Top viewers</Link>
                            </div>

                            <div className={styles.boxItem}>
                                <FaSearch />
                                <Link href="#" className={styles.link}>Discover</Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pinned}>
                        <p>Recommended</p>                        
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