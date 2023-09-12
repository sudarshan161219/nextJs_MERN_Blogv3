import React from 'react'
import styles from "./RecentPostCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {LuExternalLink} from "react-icons/lu"

const RecentPostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imgContainer} >
                    <Image className={styles.img} src={post.image} alt='image' fill />
                </div>
                <div className={styles.postInfo} >
                    <span className={styles.date} >{post.date}</span>
                    <Link href="/" className={styles.postTitle}>{post.title} <LuExternalLink className={styles.icon} /></Link>
                    <p className={styles.postDesc}>{post.content}</p>
                </div>
            </div>
        </div>
    )
}

export default RecentPostCard