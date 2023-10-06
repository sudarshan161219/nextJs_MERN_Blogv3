"use client"
import Link from 'next/link'
import styles from "./mobile.module.css"
import { useAppContext } from "@/context/Context"


const MobileNav = () => {
    const { toggleMenu, toggleMobileMenu } = useAppContext()

    return (
        <div className={toggleMobileMenu ? `${styles.show} ${styles.container}` : `${styles.container}`}>
            <ul className={styles.links}>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">Home</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">About</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">Contact</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/write">Write</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/register"> profile</Link> </li>
            </ul>
        </div>
    )
}

export default MobileNav