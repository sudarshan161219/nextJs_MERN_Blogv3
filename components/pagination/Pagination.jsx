"use client"
import styles from "./pagination.module.css"
import { useState } from "react";
import { ConfigProvider, Pagination } from 'antd';

const Paginationn = () => {
    const [current, setCurrent] = useState(3);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
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
                <Pagination className={styles.page} current={current} total={500} />
            </ConfigProvider>
        </div>
    )
}

export default Paginationn