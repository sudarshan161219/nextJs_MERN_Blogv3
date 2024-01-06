"use client"
import React from 'react'
import styles from "./allPostsCards.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from "react-icons/lu"
import { useAppContext } from '@/context/Context'
import bgColor from "../../src/app/data/bgColor.json"

const AllPostsCards = ({ post }) => {
    const { isServer } = useAppContext()
    const bgcolorsArr = [
        '1, 106, 112',
        '199, 0, 57',
        '214, 123, 255',
        '101, 40, 247',
        '252, 41, 71',
        '13, 18, 130',
        '82, 120, 83',
        '238, 114, 20',
        '112, 113, 232',
        '22, 64, 214',
        '255, 108, 34',
        '144, 12, 63',
        '199, 0, 57',
        '0, 121, 255',
        '0, 223, 162',
        '246, 250, 112',
        '255, 0, 96'
    ]



    let shuffledBg = bgcolorsArr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    shuffledBg.length = post.tags.length



    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imgContainer} >
                    <Image className={styles.img} src={post.image} alt='image' fill />
                </div>
                <div className={styles.postInfo} >
                    <span className={styles.date} >{post.date}</span>
                    <Link href="/blog/blog-post" className={styles.postTitle}>{post.title} <LuExternalLink className={styles.icon} /></Link>
                    <p className={styles.postDesc}>{post.content.substring(0, 100)}{"..."}</p>

                    <ul className={styles.tags}>
                        {shuffledBg.map((bg, idx) => (
                            <li
                                style={{
                                    backgroundColor:
                                        `${!isServer && `rgb(${bg}, 0.1)`}`
                                    , color: `${!isServer && `rgb(${bg})`}`
                                }}
                                className={styles.tag} key={idx}>
                                {post.tags[idx]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AllPostsCards