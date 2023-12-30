import React from 'react'
import styles from "./allPosts.module.css"
import AllPostsCards from '../allpostsCards/AllPostsCards'
import data from "../../src/app/data/allPostData.json"
import { ConfigProvider, Pagination } from 'antd';

const Allposts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>All Blog Posts</h1>
            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <AllPostsCards key={idx} post={item} />
                ))}
            </div>
            <div className='flex justify-center items-center' >
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
                    <Pagination className={styles.page} defaultCurrent={6} total={500} />
                </ConfigProvider>
            </div>
        </div>
    )
}

export default Allposts