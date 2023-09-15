import React from 'react'
import styles from "./footer.module.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
 const currentYear =  new Date().getFullYear();
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h5 className={styles.footerTitle}>Copyright {currentYear} - Sudarshan Hosalli</h5>
    </div>
  )
}

export default Footer