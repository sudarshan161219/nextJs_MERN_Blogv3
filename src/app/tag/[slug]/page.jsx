"use client"
import styles from "./page.module.css"
import Cards from "@/components/cards/Cards"
import { usePathname } from 'next/navigation'
import data from "../../data/allPostData.json"

const Page = () => {
  const pathname = usePathname()
  const name = pathname.substring(5)
  const decodedString = decodeURIComponent(name);

  return (
    <div className={styles.container}>
      <div className={styles.hcontainer}>
        <h1 className={styles.homeTitle}>
          {decodedString}
        </h1>
        <span className={styles.span} >53K Articles</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 mt-4 mb-4 ">
        <div className="h-32  bg-gray-200"></div>
        <div className="h-32  bg-gray-200"></div>
        <div className="h-32  bg-gray-200"></div>
        <div className="h-32  bg-gray-200"></div>
      </div>

      <div className={styles.cards}>
        {data.map((item, idx) => (
          <Cards key={idx} post={item} />
        ))}
      </div>
    </div>
  )
}

export default Page