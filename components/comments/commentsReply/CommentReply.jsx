"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from "./commentReply.module.css"
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai"
import { BsReply } from "react-icons/bs"


const CommentReply = ({ replies }) => {
    const [text, setText] = useState("")
    const [reply, setReply] = useState(false)

    const { name, comment, img, date } = replies




    const handleClick = () => {
        setReply(!reply)
    }

    const handleinput = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.container} >
            <div className={styles.imgTextContainer} >
                <div className={styles.imgContainer} >
                    <Image className={styles.img} src={img} fill alt={name} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.dateNameContainer}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.date}>{date}</span>
                    </div>
                    <p className={styles.comment}>{comment}</p>


                    <div className={styles.likeDislikeContainer} >
                        <div className={styles.ldContainer}>
                            <AiOutlineLike className={styles.LdIcon} />
                            <span className={styles.Count}>250k</span>
                        </div>

                        <div className={styles.ldContainer}>
                            <AiOutlineDislike className={styles.LdIcon} />
                            <span className={styles.Count}>25k</span>
                        </div>

                        <div onClick={handleClick} className={styles.ldContainer}>
                            <BsReply className={styles.LdIcon} />
                            <span className={styles.Count}>reply</span>
                        </div>

                    </div>
                </div>

            </div>

            {reply &&
                <div className={styles.inputContainer} >
                    <textarea className={styles.input} onChange={handleinput} value={text} placeholder='reply'></textarea>
                    <div className={styles.btnContainer} >
                        <button className={styles.button}>reply</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CommentReply