import React from 'react'
import styles from "./RecommentArticles.module.css"
import data from "../../src/app/data/data.json"
import Cards from "@/components/cards/Cards"

const RecommentArticles = () => {
    return (
        <div className={styles.container} >
            <h1 className={styles.title} >Recommended articles</h1>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <Cards post={item} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default RecommentArticles