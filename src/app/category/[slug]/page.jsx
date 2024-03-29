"use client"
import styles from "./Page.module.css"
import Cards from "@/components/cards/Cards"
import data from "../../data/allPostData.json"
import { usePathname } from 'next/navigation'

const Page = () => {
    const pathname = usePathname()
    const name = pathname.substring(10)
    const decodedString = decodeURIComponent(name);

    return (
        <div className={styles.container}>
            <div className={styles.hcontainer}>
                <h1 className={styles.homeTitle}>Explore <b className={styles.homeTitleBold}>{decodedString}</b> for tailored insights and articles.</h1>
            </div>
            <h3 className={styles.h3}>latest {name} posts</h3>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <Cards key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default Page