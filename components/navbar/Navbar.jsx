"use client"
import styles from "./navbar.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ThemeChanger from '@/components/themeChanger/ThemeChanger'
import { useAppContext } from "@/context/Context"
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"
import { MobileNav } from "../export"
import Image from "next/image"
import { FaRegUser } from "react-icons/fa6";


const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const { toggleMobileMenu, toggleMenu, toggleTheme, toggleAuthModal } = useAppContext()
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname()

  const pathRegister = pathname === "/register"

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Write', to: '/write' },
  ]

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


  if (pathRegister) {
    return null
  }

  return (
    <nav
      className={
        `${scrollPosition > 100 ? ` ${styles.stickyNav}  ${inter.className}` : `${styles.container} ${inter.className}`}`
      }>
      <Link href={"/"} className={styles.textLogo}>SH || BLOG</Link>
      <ul className={styles.links}>

        <li className={styles.link}><ThemeChanger /></li>

        <li className={styles.link} onClick={toggleAuthModal} ><FaRegUser className={styles.userIcon} /></li>

        {navLinks.map((item, idx) => (
          <li key={idx} className={`${styles.link} ${styles.desLink}`}> <Link className={styles.liLink} href={item.to}>{item.name}</Link>  </li>

        ))}
        
        <li className={`${styles.link} ${styles.linkBtn} ${styles.desLink}`}>
          <button onClick={toggleAuthModal} className={styles.liLoginLink}>Login</button>
           </li>
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