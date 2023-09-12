import React from 'react'
import styles from "./themeChanger.module.css"
import { BiSun, BiMoon } from "react-icons/bi"
import { useAppContext } from '@/context/Context'

const ThemeChanger = () => {
  const { toggleThemefn, toggleTheme } = useAppContext()
  return (
    <div style={toggleTheme ? { backgroundColor: "#0e0f13" } : { backgroundColor: "#f7f7f7" }} onClick={toggleThemefn} className={styles.container}>
      <BiSun style={toggleTheme ? { opacity: "1", color: "#f7f7f7" } : { opacity: "0", color: "#0e0f13" }} className={styles.icons} />
      <div
        style={toggleTheme ?
          { transform: "translateX(23px)", backgroundColor: "#f7f7f7" }
          :
          { transform: "translateX(0px)", backgroundColor: "#0e0f13" }

        }
        className={styles.circle}
      ></div>
      <BiMoon
        style={toggleTheme ?
          { opacity: "0", color: "#f7f7f7" }
          :
          { opacity: "1", color: "#0e0f13" }
        }
        className={styles.icons} />
    </div>
  )
}

export default ThemeChanger