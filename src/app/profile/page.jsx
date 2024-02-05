import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'


const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer} >
        <div className={styles.bgContainer} ></div>
        <div className={styles.imgMainContainer} >
          <div className={styles.imgContainer} >
            <Image src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='profile img' fill />
          </div>
        </div>
      </div>

      <div className={styles.authorInfo}>
        <h1 className={styles.h1}>name</h1>
        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, exercitationem.</p>
      </div>

      <div>
        <h2>Recent Posts</h2>
      </div>

      <div>
        <h2>Recent Comments</h2>
      </div>
    </div>
  )
}

export default Page