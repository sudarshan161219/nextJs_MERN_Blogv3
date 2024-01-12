"use client"
import React from 'react'
import styles from "./RecentPostCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from "react-icons/lu"
import { useAppContext } from '@/context/Context'


const RecentPostCard = ({ post }) => {
    const { isServer } = useAppContext()
    const bgcolorsArr = [
        '1, 106, 112',
        '199, 0, 57',
        '214, 123, 255',
        '101, 40, 247',
        '252, 41, 71',
        '13, 18, 130'
    ]

    let shuffledBg = bgcolorsArr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    shuffledBg.length = post.tags.length


    return (
        <div className={styles.container}>

            <div className="rounded-lg">
                <div className={styles.imgContainer} >
                    <Image className={styles.img} src={post.image} alt='image' fill />
                </div>
                <div className={styles.postInfo} >
                    <span className={styles.date} >{post.date}</span>
                    <Link href="/blog/blog-post" className={styles.postTitle}>{post.title} <LuExternalLink className={styles.icon} /></Link>
                    <p className={styles.postDesc}>{post.content.substring(0, 100)}{"..."}</p>

                    <div className={styles.tags}>
                        {shuffledBg.map((bg, idx) => (
                            <Link
                                href={`/tag/${post.tags[idx]}`}
                                style={{
                                    backgroundColor:
                                        `${!isServer && `rgb(${bg}, 0.1)`}`
                                    , color: `${!isServer && `rgb(${bg})`}`
                                }}
                                className={styles.tag} key={idx}>
                                {post.tags[idx]}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>



        </div>
    )
}

export default RecentPostCard