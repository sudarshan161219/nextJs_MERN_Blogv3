"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from './comment.module.css'
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai"
import { BsReply } from "react-icons/bs"
import CommentReply from '../commentsReply/CommentReply'

const Comment = ({ Ucomment }) => {
    const [text, setText] = useState("")
    const [reply, setReply] = useState(false)
    const [showReply, setShowReply] = useState(false)
    const { name, comment, img, date, replies } = Ucomment


    const handleClick = () => {
        setReply(!reply)
    }

    const handleReplies = () => {
        setShowReply(!showReply)
    }

    const handleinput = (e) => {
        setText(e.target.value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.imgTextContainer} >
                    <Image className={styles.img} src={img} width={45} height={45} alt={name} />

                {showReply && <span className={styles.line} ></span>}

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

                        <div onClick={handleClick} className={`${styles.ldContainer}  ${styles.replyBtn}`}>
                            <BsReply className={styles.LdIcon} />
                            <span className={styles.Count}>reply</span>
                        </div>

                    </div>
                </div>
            </div>


            <div className={styles.replyContainer}>
                {reply &&
                    <div className={styles.inputContainer} >
                        <textarea className={styles.input} onChange={handleinput} value={text} placeholder='reply'></textarea>
                        <div className={styles.btnContainer} >
                            <button className={styles.button}>reply</button>
                        </div>
                    </div>}
                {
                    showReply && <div>
                        {replies && replies.length > 1 && replies.map((item) => (
                            <div className={styles.replies} key={item.id}>
                                <CommentReply replies={item} />
                            </div>
                        ))}
                    </div>
                }
            </div>

            {replies.length > 1 && <div onClick={handleReplies} className={styles.tagrepliesContainer}>
                {showReply ? <span className={styles.span}>{`${replies.length > 1 ? "hide replies" : "hide reply"} `}</span> : <span className={styles.span}>{`show ${replies.length > 1 ? "replies" : "reply"} (${replies.length})  `}</span>}
            </div>}

        </div>

    )
}

export default Comment