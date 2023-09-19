import React from 'react'
import styles from "./singlePost.module.css"
import { SinglePost } from '@/components/export'


const singlepage = () => {
    return (
        <div className={styles.container}>
            <SinglePost />
        </div>
    )
}

export default singlepage