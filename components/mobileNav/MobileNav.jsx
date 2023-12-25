"use client"
import Link from 'next/link'
import styles from "./mobile.module.css"
import { useAppContext } from "@/context/Context"


const MobileNav = () => {
    const { toggleMenu, toggleMobileMenu } = useAppContext()


    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
        { name: 'Write', to: 'write' },
    ]

    return (
        <div className={toggleMobileMenu ? `${styles.show} ${styles.container}` : `${styles.container}`}>
            <ul className={styles.links}>
                {navLinks.map((item, idx) => (
                    <li key={idx} onClick={toggleMenu}> <Link className={styles.link} href={item.to}>{item.name}</Link>  </li>
                ))}
                <li onClick={toggleMenu}> <Link className={styles.link} href="/register"> Login</Link> </li>
            </ul>
        </div>
    )
}

export default MobileNav