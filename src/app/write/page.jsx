import styles from "./write.module.css"
import { Tiptap } from "@/components/export"


const page = () => {
    return (
        <div className={styles.container}>
            <Tiptap />
        </div>
    )
}

export default page