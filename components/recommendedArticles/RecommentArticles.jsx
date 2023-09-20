import React from 'react'
import styles from "./RecommentArticles.module.css"
import RecommendArticlesCards from '../recommendArticlesCards/RecommendArticlesCards'
import data from "../../src/app/data/data.json"

const RecommentArticles = () => {
    return (
        <div className={styles.container} >
            <h1 className={styles.title} >Recommended articles</h1>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <RecommendArticlesCards post={item} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default RecommentArticles