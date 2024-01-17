"use client"
import { useState, useEffect } from 'react'
import { Inter } from "next/font/google";
import styles from "./auth.module.css"
import { MdClose } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link'
import { useAppContext } from '@/context/Context';
import google from "@/public/google.webp"
import Image from 'next/image';
const inter = Inter({ subsets: ["latin"] });


const Auth = () => {
    const { toggleAuthModal, authToggle } = useAppContext()
    const [showpwd, setShowpwd] = useState(false)
    const [showConfirmPwd, setShowConfirmPwd] = useState(false)
    const [isMember, setIsMember] = useState(false)

    useEffect(() => {
        if (authToggle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [authToggle]);

    const handleAuth = () => {
        setIsMember(!isMember)
    }

    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
    }

    const handlePwd = () => {
        setShowpwd(!showpwd)
    }

    const handleConfirmPwd = () => {
        setShowConfirmPwd(!showConfirmPwd)
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


                <div className={styles.authBtnContainer}>
                    <button className={styles.authbtn}> <Image src={google} alt='google' width={20} height={20} /> continue with google</button>
                </div>

                <span className="flex items-center ">
                    <span className={styles.spanLine}></span>
                    <span className={`${styles.spanText} shrink-0 px-6`}>OR</span>
                    <span className={styles.spanLine}></span>
                </span>


                <div className='flex flex-col gap-4 '>
                    <form onSubmit={handleForm} className={`${styles.form} grid gap-5 `}>
                        {isMember ? null : <input className={styles.input} placeholder='Name' type="text" name='name' />}
                        <input className={styles.input} placeholder='Email' type='email' name='email' />
                        <div className='flex items-center relative w-full'>
                            <input className={styles.input} placeholder='Password' type={showpwd ? 'text' : 'password'} name='password' />
                            {showpwd ?

                                <FaRegEyeSlash onClick={handlePwd} className={styles.eyeIcon} />
                                :
                                < FaRegEye onClick={handlePwd} className={styles.eyeIcon} />
                            }
                        </div>

                        {isMember ? null : <div className='flex items-center relative w-full'>
                            <input className={styles.input} placeholder='Confirm Password' type={showConfirmPwd ? 'text' : 'password'} />
                            {showConfirmPwd ?
                                <FaRegEyeSlash onClick={handleConfirmPwd} className={styles.eyeIcon} />
                                :
                                < FaRegEye onClick={handleConfirmPwd} className={styles.eyeIcon} />
                            }
                        </div>}

                        {isMember ? <div className='flex justify-end items-center'>
                            <Link onClick={toggleAuthModal} className={styles.liLoginLink} href="/forgot_password">Forgot Password ?</Link>
                        </div> : null}

                        <button className={styles.btn}>Create Account</button>
                    </form>


                </div>


                <div className='flex tems-start justify-center mt-4 mb-4  '>
                    <p className={styles.p}> {isMember ? "Don’t have an account" : "Already  have an account"} ? <span className={styles.span} onClick={handleAuth} >  {isMember ? "Register Now" : "Login"} </span>  </p>
                </div>
            </div>
        </div>
    )
}

export default Auth