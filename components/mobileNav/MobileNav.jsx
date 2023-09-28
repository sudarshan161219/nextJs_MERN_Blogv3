"use client"
import Link from 'next/link'
import styles from "./mobile.module.css"
import { useAppContext } from "@/context/Context"


const MobileNav = () => {
    const { toggleMenu } = useAppContext()

    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">Home</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">About</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/">Contact</Link>  </li>
                <li onClick={toggleMenu}> <Link className={styles.link} href="/register"> profile</Link> </li>
            </ul>
        </div>
    )
}

export default MobileNav