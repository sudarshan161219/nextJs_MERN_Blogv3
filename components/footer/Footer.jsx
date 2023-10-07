"use client"
import styles from "./footer.module.css"
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear();
  const pathRegister = pathname === "/register"


  if (pathRegister) {
    return null
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h5 className={styles.footerTitle}>Copyright {currentYear} - Sudarshan</h5>
    </div>
  )
}

export default Footer