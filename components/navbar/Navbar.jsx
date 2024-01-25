"use client"
import styles from "./navbar.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeChanger from '@/components/themeChanger/ThemeChanger'
import { useAppContext } from "@/context/Context"
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"
import { MobileNav } from "../export"
import { FaRegUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch, IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react"
import { GoPencil } from "react-icons/go";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const { toggleMobileMenu, toggleMenu, toggleTheme, toggleAuthModal } = useAppContext()
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname()
  const { data, status } = useSession()


  const pathRegister = pathname === "/register"
  const pathforgot_password = pathname === "/forgot_password"
  const pathwrite = pathname === "/write"

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


  if (pathRegister || pathforgot_password || pathwrite) {
    return null
  }

  return (
    <nav
      className={
        `${scrollPosition > 100 ? ` ${styles.stickyNav}  ${inter.className}` : `${styles.container} ${inter.className}`}`
      }>
      <Link href={"/"} className={styles.textLogo}>SH || BLOG</Link>


      <div>
        <ul className="flex items-center gap-4">
          <li className={styles.link}><ThemeChanger /></li>
          <li className={styles.link}>
            <Link href={"/search"}><IoIosSearch className={styles.searchicon} /></Link>
          </li>
          {status === 'authenticated' && <li className={styles.link}>
            <Link className={`${styles.write} flex items-center gap-1`} href={"/write"}>write <GoPencil className={styles.writeicon} /></Link>
          </li>}
          {status === 'authenticated' ? <li className={styles.link} onClick={signOut}  ><IoIosLogOut className={styles.userIcon} /></li> : <li className={styles.link} onClick={toggleAuthModal} ><CiUser className={styles.userIcon} /></li>}
        </ul>
      </div>

      {/* <div className="flex items-center gap-3" >
        <ul className={styles.links}>

          <li className={styles.link}><ThemeChanger /></li>
          <li> <Link href={"/search"}><IoIosSearch className={styles.searchicon} /></Link> </li>
          <li className={styles.link} onClick={toggleAuthModal} ><FaRegUser className={styles.userIcon} /></li>

          {navLinks.map((item, idx) => (
            <li key={idx} className={`${styles.link} ${styles.desLink}`}> <Link className={styles.liLink} href={item.to}>{item.name}</Link>  </li>

          ))}

          <li className={`${styles.link} ${styles.linkBtn} ${styles.desLink}`}>
            <button onClick={toggleAuthModal} className={styles.liLoginLink}>Login</button>
          </li>
        </ul>

        <ul className={styles.ham}>
          <li onClick={toggleMenu} className={`${styles.link} ${styles.hamenu}`}>
            <span
              className={toggleMobileMenu ? styles.xline : styles.line}></span>
            <span
              className={toggleMobileMenu ? styles.xline : styles.line}></span>
            <span
              className={toggleMobileMenu ? styles.xline : styles.line}></span>
          </li>
        </ul>
      </div> */}


      <MobileNav />
    </nav>
  )
}

export default Navbar