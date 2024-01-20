import styles from "./pagination.module.css"
import { ConfigProvider, Pagination } from 'antd';

const Paginationn = () => {
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
        <Pagination className={styles.page} current={1} total={500} />
    </ConfigProvider>
</div>
  )
}

export default Paginationn