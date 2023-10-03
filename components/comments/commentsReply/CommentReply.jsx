
import Image from 'next/image'
import styles from "./commentReply.module.css"
import Comment from "../comment/Comment"
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai"
import { BsReply } from "react-icons/bs"


const CommentReply = ({ replies, bool }) => {
    const { name, comment, img, date } = replies



    return (
        <div className={styles.container} >
            {/* <Comment Ucomment={replies} /> */}

            <div className={styles.imgTextContainer} >
                <Image className={styles.img} src={img} width={40} height={40} alt={name} />
                {bool ? null : <span className={styles.line} ></span>}
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

                        <div className={styles.ldContainer}>
                            <BsReply className={styles.LdIcon} />
                            <span className={styles.Count}>reply</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommentReply