import styles from "./authorposts.module.css"
import AuthorPostCard from "../authorPostCard/AuthorPostCard"
import data from "@/src/app/data/allPostData.json"

const AuthorPosts = () => {
  return (
    <div>


      <div className={styles.cards}>
        {data.map((item, idx) => (
          <AuthorPostCard key={idx} post={item} />
        ))}
      </div>
   
    </div>
  )
}

export default AuthorPosts