import React from 'react'
import styles from "./allPosts.module.css"
import AllPostsCards from '../allpostsCards/AllPostsCards'
import data from "../../src/app/data/allPostData.json"


const Allposts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>All Blog Posts</h1>
            <div  className={styles.cards}>
                {data.map((item, idx) => (
                    <AllPostsCards key={idx} post={item} />
                ))}
            </div>

        </div>
    )
}

export default Allposts