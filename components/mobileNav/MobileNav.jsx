import React from 'react'
import Link from 'next/link'
import styles from "./mobile.module.css"



const MobileNav = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                <li > <Link className={styles.link} href="/">Home</Link>  </li>
                <li > <Link className={styles.link} href="/">About</Link>  </li>
                <li > <Link className={styles.link} href="/">Contact</Link>  </li>
                <li > <Link className={styles.link} href="/register"> profile</Link> </li>
            </ul>
        </div>
    )
}

export default MobileNav