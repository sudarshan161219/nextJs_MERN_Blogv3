"use client"
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from "next/image"

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
  const { toggleMenuFn, toggleTheme, toggleAuthModal ,  toggleMenu} = useAppContext()
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
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ toggleMenu]);


  if (pathRegister || pathforgot_password || pathwrite) {
    return null
  }

  return (
    <nav
      className={
        `${scrollPosition > 100 ? ` ${styles.stickyNav}  ${inter.className}` : `${styles.container} ${inter.className}`}`
      }>


      <div className={styles.moblieSideBar} onClick={toggleMenuFn}>
        <div className={styles.imageContainer} >
          <Image src="https://images.unsplash.com/photo-1706115963936-43054590f598?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-picture" fill />
        </div>
      </div>
      <Link href={"/"} className={styles.textLogo}>SH || BLOG</Link>
      <div>
        <ul className="flex items-center gap-4">
          {/* <li className={styles.link}><ThemeChanger /></li> */}
          <li className={styles.link}>
            <Link href={"/search"}><IoIosSearch className={styles.searchicon} /></Link>
          </li>
          {/* {status === 'authenticated' && <li className={styles.link}>
            <Link className={`${styles.write} flex items-center gap-1`} href={"/write"}>write
              <GoPencil className={styles.writeicon} />
            </Link>
          </li>} */}
          {status === 'authenticated' ?
            <li className={styles.link} onClick={signOut}  >
              <IoIosLogOut className={styles.userIcon} />
            </li>
            :
            <li className={styles.link} onClick={toggleAuthModal} >
              <CiUser className={styles.userIcon} />
            </li>
          }
        </ul>
      </div>


      <MobileNav />
    </nav>
  )
}

export default Navbar