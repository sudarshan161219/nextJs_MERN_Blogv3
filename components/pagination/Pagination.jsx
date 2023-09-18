import React from 'react'
import styles from "./pagination.module.css"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer} >
        <MdKeyboardArrowLeft className={styles.paginationIcons} />
        <span className={styles.paginationText}>previous</span>
      </div>
      <div className={styles.iconContainer} >
        <span className={styles.paginationText}>next</span>
        <MdKeyboardArrowRight className={styles.paginationIcons} />
      </div>

    </div>
  )
}

export default Pagination