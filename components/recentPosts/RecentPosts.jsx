import React from 'react'
import styles from "./recentPosts.module.css"
import data from "../../src/app/data/data.json"
import Cards from "@/components/cards/Cards"


const getData = async () => {
    const res = await fetch(`${process.env.URL}/api/recentPosts`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    return res.json()
}

const RecentPosts = async () => {

    const dataa = await getData()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Blog Posts</h1>
            <div className={`${styles.cards} grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8`}>
                {data.map((item, idx) => (
                    <Cards key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default RecentPosts