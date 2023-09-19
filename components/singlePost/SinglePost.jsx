import React from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import { AiOutlinePause } from "react-icons/ai"

const SinglePost = () => {

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

    console.log(shuffledBg);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <div className={styles.postInfo} >
                    <div className={styles.authorInfo} >
                        <Image src='https://images.unsplash.com/photo-1693967971746-c4f294950f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="-" width={35} height={35} className={styles.authorImage} />
                        <span className={styles.author} >
                            author_21
                        </span>
                    </div>
                    <AiOutlinePause className={styles.icon} />
                    <span className={styles.date} >Sunday, 1 Jan 2024</span>
                </div>
            </div>
            <div className={styles.imgContainer} >
                <Image src='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="-" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde quasi ipsa dolore autem officiis facere omnis mollitia quas corrupti doloribus est earum dolorum deleniti ad consectetur aliquid cum, at sint odit adipisci non error reiciendis? Sed rem earum, accusamus ut suscipit repudiandae sapiente ullam maxime corporis reiciendis nihil alias.</p>


                <ul className={styles.tagsContainer}>

                    {shuffledBg.map((bg, idx) => (
                        <li
                            style={{
                                backgroundColor:
                                    `${`rgb(${bg}, 0.1)`}`
                                , color: `${`rgb(${bg})`}`
                            }}
                            className={styles.tag} key={idx}>
                            Tags
                        </li>
                    ))}

                </ul>


            </div>
        </div>
    )
}

export default SinglePost