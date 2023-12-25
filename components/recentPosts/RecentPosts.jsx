
import React from 'react'
import styles from "./recentPosts.module.css"
import data from "../../src/app/data/data.json"
import RecentPostCard from '../recentPostCard/RecentPostCard'
const RecentPosts = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Blog Posts</h1>
            <div className={ `${styles.cards} grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8`  }>
                {data.map((item, idx) => (
                    <RecentPostCard key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default RecentPosts