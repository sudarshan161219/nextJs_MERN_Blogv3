import React from 'react'
import styles from "./page.module.css"
import { HomeTitle, RecentPosts, CategoriesTabs, Allposts } from '@/components/export'

const App = () => {
  return (
    <div className={styles.container}>
      <HomeTitle />
      <RecentPosts />
      <CategoriesTabs />
      < Allposts />
    </div>
  )
}

export default App