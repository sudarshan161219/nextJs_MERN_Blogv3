import styles from "./allPosts.module.css"
import Cards from "@/components/cards/Cards"
import data from "../../src/app/data/allPostData.json"


const getData = async (page) => {
    const res = await fetch(`${process.env.URL}/api/all_Posts?page=${page}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    return res.json()
}


const Allposts = async ({ page }) => {

    const dataa = await getData(page)

    console.log(dataa);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>All Blog Posts</h1>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <Cards key={idx} post={item} />
                ))}
            </div>
        </div>
    )
}

export default Allposts