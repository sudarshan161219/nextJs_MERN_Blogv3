import React from 'react'
import styles from "./homeTitle.module.css"
const HomeTitle = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.homeTitle}>Hey,  Chandra Prakash here! <br /> <b className={styles.homeTitleBold}>Discover the World of Ideas.</b></h1>
        </div>
    )
}

export default HomeTitle