"use client"
import styles from "./page.module.css"
import Cards from "@/components/cards/Cards"
import { usePathname } from 'next/navigation'
import data from "../../data/allPostData.json"
import { RecentTags } from "@/components/export"
import { ConfigProvider, Pagination } from 'antd';


const Page = () => {
  const pathname = usePathname()
  const name = pathname.substring(5)
  const decodedString = decodeURIComponent(name);

  const rv = [1, 2, 3, 4]

  return (
    <div className={styles.container}>
      <div className={styles.hcontainer}>
        <h1 className={styles.homeTitle}>
          {decodedString}
        </h1>
        <span className={styles.span} >53K Articles</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 mt-4 mb-4 ">
        {rv.map((item, idx) => (
          <RecentTags key={idx} />
        ))}
      </div>


      <div className="mt-10 mb-10" >
      <span className="flex items-center">
        <span className={`${styles.spanb} h-px flex-1 `}></span>
        <span className={`${styles.spanT} shrink-0 px-6 `}>All {decodedString} Related Posts</span>
        <span className={`${styles.spanb} h-px flex-1 `}></span>
      </span>
      </div>

      <div className={styles.cards}>
        {data.map((item, idx) => (
          <Cards key={idx} post={item} />
        ))}
      </div>

      <div className='flex justify-center items-center mt-20' >
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: "var(--textColor)",
                        },
                        components: {
                            Pagination: {
                                colorPrimaryBorder: "var(--commentShowReplyText)",
                                itemActiveBg: "var(--softBg)",
                                itemBg: "var(--softBg)",
                                itemLinkBg: "var(--textColor)",
                                itemInputBg: "var(--softBg)",
                                itemSize: 40,
                            },
                        },
                    }}
                >
                    <Pagination className={styles.page} defaultCurrent={1} total={500} />
                </ConfigProvider>
            </div>
    </div>
  )
}

export default Page