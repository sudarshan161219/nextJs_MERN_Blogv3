"use client"
import styles from "./navbar.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ThemeChanger from '@/components/themeChanger/ThemeChanger'
import { useAppContext } from "@/context/Context"
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"
import { MobileNav } from "../export"

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const { toggleMobileMenu, toggleMenu } = useAppContext()
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname()

  const pathRegister = pathname === "/register"

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }


  useEffect(() => {
    if (toggleMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleMobileMenu]);


  if(pathRegister) {
    return null
  }

  return (
    <nav
      className={
        `${scrollPosition > 100 ? ` ${styles.stickyNav}  ${inter.className}` : `${styles.container} ${inter.className}`}`
      }>
      <Link href={"/"} className={styles.textLogo}>CDev || BLOG</Link>
      <ul className={styles.links}>
        <li className={styles.link}><ThemeChanger /></li>
        <li className={styles.link}> <Link className={styles.liLink} href="/">Home</Link>  </li>
        <li className={styles.link}> <Link className={styles.liLink} href="/">About</Link>  </li>
        <li className={styles.link}> <Link className={styles.liLink} href="/">Contact</Link>  </li>
        <li className={styles.link}> <Link className={styles.liLink} href="/write">Write</Link>  </li>
        <li className={`${styles.link} ${styles.linkBtn}`}> <Link className={styles.liLoginLink} href="/register">Login</Link></li>
        <li onClick={toggleMenu} className={styles.link}>
          <span
            className={toggleMobileMenu ? styles.xline : styles.line}></span>
          <span
            className={toggleMobileMenu ? styles.xline : styles.line}></span>
          <span
            className={toggleMobileMenu ? styles.xline : styles.line}></span>
        </li>
      </ul>
    <MobileNav />
    </nav>
  )
}

export default Navbar