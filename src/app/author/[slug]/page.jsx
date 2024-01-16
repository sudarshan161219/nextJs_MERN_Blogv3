import styles from "./page.module.css"
import {
    AuthorInfo,
    AuthorPosts,
    Select
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

                <div className="flex items-center justify-between" >
                <h1 className={styles.heading}>{"Author's"} Posts</h1>
                {/* <Select /> */}
                </div>

                <AuthorPosts />
            </div>
        </div>
    )
}

export default page