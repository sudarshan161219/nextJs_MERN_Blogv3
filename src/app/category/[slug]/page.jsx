"use client"
import styles from "./Page.module.css"
import { AllPostsCards } from '@/components/export'
import data from "../../data/allPostData.json"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

const Page = () => {
    const pathname = usePathname()
    const name = pathname.substring(10)

    return (
        <div className={styles.container}>
            <div className={styles.hcontainer}>
                <h1 className={styles.homeTitle}>Explore <b className={styles.homeTitleBold}>{name}</b> for tailored insights and articles.</h1>
            </div>

            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <AllPostsCards key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default Page