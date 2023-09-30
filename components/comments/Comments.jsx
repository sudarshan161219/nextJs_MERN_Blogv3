import styles from './comments.module.css'
import Comment from './comment/Comment'


const Comments = () => {
    let comments = [
        {
            name: "Brahma",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
            date: "00.00.0000"
        },
        {
            name: "Vishnu",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
            date: "00.00.0000"

        },
        {
            name: "Maheswara",
            comment: "ಅಮ್ಮ ನೀನೆ ದೈವ 🙏",
            img: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            date: "00.00.0000"

        }
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title} > Comments</h1>
            <div className={styles.inputContainer} >
                <textarea className={styles.input} placeholder="write your comment"></textarea>
            </div>

            <div className={styles.commentsContainer} >
                {comments.map((item, idx) => {
                    < Comment comments={item} key={idx} />
                })}
            </div>

        </div>
    )
}

export default Comments