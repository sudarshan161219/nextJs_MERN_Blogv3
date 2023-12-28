import Image from "next/image"
import styles from "./authorinfor.module.css"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const AuthorInfo = () => {

  const socialLinks = [
    {
      icon: <FaFacebookF className={styles.icon} />,
      herf: "#"
    },
    {
      icon: <FaInstagram className={styles.icon} />,
      herf: "#"
    },
    {
      icon: <FaGithub className={styles.icon} />,
      herf: "#"
    },
    {
      icon: <FaXTwitter className={styles.icon} />,
      herf: "#"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} >
        <Image className={styles.img} src="https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="profile-pic" />
      </div>

      <div className=" grid gap-3 " >
        <h1 className={styles.heading} >Lorem Ipsum</h1>
        <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {"industry's"} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

        <ul className=" flex items-center gap-3 ">
         {socialLinks.map((item, idx) => (
          <li key={idx}><a className={styles.link} href={item.herf}>{item.icon}</a></li>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default AuthorInfo