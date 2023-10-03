import Image from 'next/image'
import styles from './comment.module.css'
import { AiOutlineLike, AiOutlineDislike, } from "react-icons/ai"
import { BsReply } from "react-icons/bs"
import CommentReply from '../commentsReply/CommentReply'

const Comment = ({ Ucomment }) => {

    const { name, comment, img, date, replies } = Ucomment

    let last
    let lastElement = replies[replies.length - 1];
    replies.map(item => last = item.id)
    let bool = lastElement.id === last

    console.log(bool);

    return (
        <div className={styles.container}>
            <div className={styles.imgTextContainer} >
                <Image className={styles.img} src={img} width={40} height={40} alt={name} />
                {replies.length > 1 && <span className={styles.line} ></span>}

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
            <div className={styles.replyContainer}>
                {replies && replies.length > 1 && replies.map((item) => (
                    <div className={styles.replies} key={item.id}>
                        <CommentReply bool={bool} replies={item} />
                        <span className={styles.lines}></span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Comment