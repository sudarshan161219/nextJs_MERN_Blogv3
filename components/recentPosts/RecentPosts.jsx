"use client"
import React, { useEffect, useState } from 'react'
import styles from "./recentPosts.module.css"
import data from "../../src/app/data/data.json"
import RecentPostCard from '../recentPostCard/RecentPostCard'
const RecentPosts = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Blog Posts</h1>
            {data.map((item, idx) => (
                <RecentPostCard key={idx} post={item} />
            ))}
        </div>
    )
}

export default RecentPosts