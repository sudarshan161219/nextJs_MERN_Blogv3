import styles from './comments.module.css'
import Comment from './comment/Comment'
import { AiOutlineCloseCircle } from "react-icons/ai"

const Comments = ({ togglecomments, toggleCommentsFn }) => {
    let comments = [
        {
            id: 1,
            name: "Brahma",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
            date: "00.00.0000",
            replies: [
                {
                    id:1,
                    name: "Human",
                    comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
                    img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
                    date: "00.00.0000",
                    commentId:1,
                },
                {
                    id:2,
                    name: "Human",
                    comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
                    img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
                    date: "00.00.0000",
                    commentId:1,
                },
                {
                    id:3,
                    name: "Human",
                    comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
                    img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
                    date: "00.00.0000",
                    commentId:1,
                }
            ]
        },
        {
            id: 2,
            name: "Vishnu",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
            date: "00.00.0000",
            replies: [{

            }]

        },
        {
            id: 3,
            name: "Maheswara",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            date: "00.00.0000",
            replies: [{

            }]

        }
    ]



    return (
        // <div className={togglecomments ? `${styles.show}  ${styles.container}` : `${styles.container}`}>
        <div className={styles.container}>
            <div className={styles.titleIcon} >
                <h1 className={styles.title} > Comments (15k)</h1>
                <AiOutlineCloseCircle onClick={toggleCommentsFn} className={styles.icon} />
            </div>

            <div className={styles.inputContainer} >
                <textarea className={styles.input} placeholder="write your comment"></textarea>
                <div className={styles.btnContainer} >
                    <button className={styles.button}>Post</button>
                </div>
            </div>

            <div className={styles.commentsContainer} >
                {comments.map((item, idx) => (
                    <Comment Ucomment={item} key={idx} />
                ))}
            </div>

        </div>
    )
}

export default Comments