"use client"
import { useState } from 'react'
import { Inter } from "next/font/google";
import styles from "./auth.module.css"
import { MdClose } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link'
import { useAppContext } from '@/context/Context';
const inter = Inter({ subsets: ["latin"] });


const Auth = () => {
    const { toggleAuthModal, authToggle } = useAppContext()
    const [isMember, setIsMember] = useState(false)


    const handleAuth = () => {
        setIsMember(!isMember)
    }


    return (
        <div className={`${authToggle ? `${styles.container} ${styles.show} ${inter.className}` : `${styles.container} ${inter.className}`}`}>
            <div className={styles.modal}>
                <div className='flex items-start justify-end' >
                    <MdClose onClick={toggleAuthModal} className={styles.closeIcon} />
                </div>

                <div className={`${styles.headingContainer}grid gap-5`} >
                    <h1 className={styles.heading}> {isMember ? "Lets Sign you in" : "Lets Register Account"}</h1>
                    <p className={styles.para}>{isMember ? "It's great to have you back! Your presence was missed." : "Your journey is filled with wonderful experiences!"}</p>
                </div>


                <div className='flex flex-col gap-4 '>

                    <form className={`${styles.form} grid gap-5 `}>
                        {isMember ? null : <input className={styles.input} placeholder='Name' type="text" name='name' />}
                        <input className={styles.input} placeholder='Email' type='email' name='email' />
                        <div className='flex items-center relative w-full'>
                            <input className={styles.input} placeholder='Password' type="password" name='password' />
                            < FaRegEye className={styles.eyeIcon} />
                        </div>

                        {isMember ? null : <div className='flex items-center relative w-full'>
                            <input className={styles.input} placeholder='Confirm Password' type="password" />
                            < FaRegEye className={styles.eyeIcon} />
                        </div>}

                    </form>

                    {isMember ? <div className='flex justify-end items-center'>
                        <Link className={styles.liLoginLink} href="/reset-password">Forgot Password ?</Link>
                    </div> : null}
                </div>


                <button className={styles.btn}>Create Account</button>
                <div className='flex tems-start justify-center mt-4 mb-4  '>
                    <p className={styles.p}> {isMember ? "Don’t have an account" : "Already  have an account"} ? <span className={styles.span} onClick={handleAuth} >  {isMember ? "Register Now" : "Login"} </span>  </p>
                </div>
            </div>
        </div>
    )
}

export default Auth