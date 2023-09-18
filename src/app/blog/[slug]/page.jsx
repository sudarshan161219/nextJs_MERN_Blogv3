import React from 'react'
import styles from "./Page.module.css"
import { AllPostsCards } from '@/components/export'
import data from "../../data/allPostData.json"

const Page = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.Headtitle}>Category Name</h1>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <AllPostsCards key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default Page