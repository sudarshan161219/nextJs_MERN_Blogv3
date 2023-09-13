import React from 'react'
import styles from "./themeChanger.module.css"
import { BiSun, BiMoon } from "react-icons/bi"
import { useAppContext } from '@/context/Context'

const ThemeChanger = () => {
  const { toggleThemefn } = useAppContext()
  return (
    <div onClick={toggleThemefn} className={styles.container}>
      <BiSun className={styles.icons} />
      <div
        className={styles.circle}
      ></div>
      <BiMoon

        className={styles.icons} />
    </div>
  )
}

export default ThemeChanger