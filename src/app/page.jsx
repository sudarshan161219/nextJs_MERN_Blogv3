import React from 'react'
import styles from "./page.module.css"
import { HomeTitle, RecentPosts } from '@/components/export'

const App = () => {
  return (
    <div className={styles.container}>
      <HomeTitle />
      <RecentPosts />
    </div>
  )
}

export default App