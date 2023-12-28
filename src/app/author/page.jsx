import styles from "./page.module.css"
import {
    AuthorInfo,
    AuthorPosts
} from "@/components/export"

const page = () => {
    return (
        <div className={styles.container} >
            <div className={styles.authorInfo} >
                <AuthorInfo />
            </div>
            <span className="flex items-center">
                <span className={`${styles.span} h-px flex-1 mt-3`}></span>
                <span className={`${styles.span} h-px flex-1 mt-3`}></span>
            </span>
            <div className={styles.authorPosts} >
                <h1 className={styles.heading}>{"Author's"} Posts</h1>
                <AuthorPosts />
            </div>
        </div>
    )
}

export default page