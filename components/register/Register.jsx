"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from "./register.module.css"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Register = () => {
    const [show, setShow] = useState(false)

    const handleShowPassword = () => {
        setShow(!show)
    }

    return (
        <div className={styles.container}>

            <div className={styles.imgContainer} >
                <Image src="/loginPage.jpg" alt="signin/signup" width="64" height="64" />
            </div>
            <div className={styles.formContainer} >
                <h1 className={styles.title}>Create Account</h1>
                <div className={styles.authGoogle_faceBook} >
                    <button className={styles.socialBtn}>
                        <FcGoogle className={styles.socialIcon} />
                        Sign up with Google
                    </button>
                    <button className={styles.socialBtn}>
                        <BsFacebook className={styles.socialIcon} />
                        Sign up with Facebook
                    </button>
                </div>


                <span className={styles.span}>- OR - </span>

                <form className={styles.form}>

                    <div className={styles.group}>
                        <input className={styles.input} type="text" required />
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Name</label>
                    </div>


                    <div className={styles.group}>
                        <input className={styles.input} type="email" required />
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Email Address</label>
                    </div>


                    <div className={`${styles.group} ${styles.passwordContainer}`}>
                        <input className={styles.input} type={show ? "text" : "password"} required />
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Password</label>

                        {show ? <AiOutlineEyeInvisible onClick={handleShowPassword} className={styles.pIcon} /> :
                            <AiOutlineEye onClick={handleShowPassword} className={styles.pIcon} />
                        }
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Register