"use client"
import React from 'react'
import styles from "./cards.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from "react-icons/lu"
import { useAppContext } from '@/context/Context'
import bgColor from "../../src/app/data/bgColor.json"

const Cards = ({ post }) => {
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
                    <div className='flex items-center justify-between '>
                        <Link  href={`/author/${post.author}`} className='flex items-center gap-3'>
                            <Image className={styles.pimg} src="https://images.unsplash.com/photo-1659827478619-60e9921dacab?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='image' width={35} height={35} />
                            <span className={styles.authorName}>{post.author}</span>

                        </Link>
                        <span className={styles.date} >{post.date}</span>
                    </div>
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

export default Cards