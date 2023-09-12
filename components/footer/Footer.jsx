import React from 'react'
import styles from "./footer.module.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={`${styles.container} ${inter.className}`}>Footer</div>
  )
}

export default Footer