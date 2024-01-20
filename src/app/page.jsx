import React from 'react'
import styles from "./page.module.css"
import { HomeTitle, RecentPosts, CategoriesTabs, Allposts, Pagination } from '@/components/export'


const App = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1

  return (
    <div className={styles.container}>
      <HomeTitle />
      <RecentPosts />
      <CategoriesTabs />
      <Allposts page={page} />
      <Pagination />
    </div>
  )
}

export default App