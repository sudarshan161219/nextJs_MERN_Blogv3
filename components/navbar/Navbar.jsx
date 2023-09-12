"use client"
import styles from "./navbar.module.css"
import Link from 'next/link'
import ThemeChanger from '@/components/themeChanger/ThemeChanger'
import { useAppContext } from "@/context/Context"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const { toggleMobileMenu, toggleMenu } = useAppContext()

  return (
    <nav className={`${styles.container} ${inter.className}`}>
      <h1 className={styles.textLogo}>SH || BLOG</h1>

      <ul className={styles.links}>
        <li className={styles.link}><ThemeChanger /></li>
        <li className={styles.link}> <Link href="/">Home</Link>  </li>
        <li className={styles.link}> <Link href="/">About</Link>  </li>
        <li className={styles.link}> <Link href="/">Contact</Link>  </li>
        <li className={styles.link}>profile</li>
        <li onClick={toggleMenu} className={styles.link}>
          <span className={toggleMobileMenu ? styles.xline : styles.line}></span>
          <span className={toggleMobileMenu ? styles.xline : styles.line}></span>
          <span className={toggleMobileMenu ? styles.xline : styles.line}></span>
        </li>
      </ul>

      {/* <div className={styles.menuContainer} ></div> */}

    </nav>
  )
}

export default Navbar