"use client"
import Link from 'next/link'
import styles from "./mobile.module.css"
import { useAppContext } from "@/context/Context"
import { signOut, useSession } from "next-auth/react"
import { Inter } from "next/font/google";
import { IoClose } from "react-icons/io5";


const inter = Inter({ subsets: ["latin"] });
const MobileNav = () => {
    const { toggleMenu, toggleMobileMenu , toggleMenuFn} = useAppContext()
    const { data, status } = useSession()

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
        { name: 'Write', to: 'write' },
    ]

    return (
        <div className={toggleMenu ? `${styles.show} ${styles.container} ${inter.className}` : `${styles.container} ${inter.className}`}>
            <header className={`flex justify-end items-center w-full  ${styles.header}`} >
                <IoClose onClick={toggleMenuFn}className={styles.closeIcon} />
            </header>
            <ul className={styles.links}>
                {navLinks.map((item, idx) => (
                    <li key={idx} onClick={toggleMenuFn}> <Link className={styles.link} href={item.to}>{item.name}</Link>  </li>
                ))}
                {status === 'authenticated' ? <li className={styles.link}> Logout </li> : <li onClick={toggleMenuFn}> <Link className={styles.link} href="/register"> Login</Link> </li>}
            </ul>
        </div>
    )
}

export default MobileNav