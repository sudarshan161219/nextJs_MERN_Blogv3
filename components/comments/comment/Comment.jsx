import styles from './comment.module.css'

const Comment = ([comments]) => {

    const { name, comment, img } = comments

    return (
        <div className={styles.container}>comment</div>
    )
}

export default Comment