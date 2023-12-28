import styles from "./page.module.css"
import {
    AuthorInfo,
    AuthorPosts
} from "@/components/export"

const page = () => {
    return (
        <div className={styles.container} >
            <AuthorInfo />
            <span className="flex items-center">
                <span className={`${styles.span} h-px flex-1`}></span>
                <span className="shrink-0 px-6">Lorem, ipsum dolor</span>
                <span className={`${styles.span} h-px flex-1`}></span>
            </span>
            <AuthorPosts />
        </div>
    )
}

export default page