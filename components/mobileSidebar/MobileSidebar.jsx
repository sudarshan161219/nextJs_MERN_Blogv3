"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image"
import { Inter } from "next/font/google";
import styles from "./mobileSidebar.module.css"
import { useAppContext } from "@/context/Context"
import Link from "next/link"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { CiHome, CiClock1 } from "react-icons/ci";
const inter = Inter({ subsets: ["latin"] });

const MobileSidebar = () => {

    const { toggleMenu, toggleMenuFn, user } = useAppContext()
    const [activeSection, setActiveSection] = useState(null);
    const parentDivRef = useRef(null);


    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
            document.body.style.overflowX = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.overflowX = "hidden";

        }

        document.addEventListener("click", handleEvent, true);
        return () => {
            document.removeEventListener("click", handleEvent, true);
        };
    }, [toggleMenu]);

    const refOne = useRef(null);

    const handleEvent = (e) => {
        if (!refOne.current.contains(e.target)) {
            return;
        } else {
            !toggleMenuFn();
        }
    };


    const handleSectionClick = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };



    const sections = [
        { title: 'Recent', content: "HEllo" },
        { title: 'Recent', content: "HEllo" },
        { title: 'Recent', content: "HEllo" },
        { title: 'Recent', content: "HEllo" },
        { title: 'Recent', content: "HEllo" },
    ];

    return (
        <div className={`${styles.container} ${inter.className}`}>
            <div ref={refOne} className={`${toggleMenu ? `${styles.showBg}  ${styles.bg}` : `${styles.bg}`}`}></div>
            <div className={`${toggleMenu ? `${styles.showsidebar}  ${styles.sidebar}` : `${styles.sidebar}`}`}>


                <div className={`${styles.nav} flex gap-2`} >
                    <div className={styles.closeIconContainer} onClick={toggleMenuFn}  ><IoMdClose className={styles.closeIcon} /></div>

                    <div className="flex gap-2 items-center " >
                        <div className={styles.profileImgContainer} >
                            <Image src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" fill />
                        </div>
                        <div className={styles.userinfoContainer} >
                            <h1 className={styles.h1}>Andrew Smith</h1>
                            <strong className={styles.strong}>Product Manager</strong>
                        </div>
                    </div>
                </div>


                <div className={styles.menuLinks} >
                    <Link className={`${styles.heading} flex items-center gap-3`} href="/" ><CiHome className={styles.icon} /> Home</Link>
                    <div className={` ${styles.tabs} grid gap-3`}  >

                        <div className={`${styles.heading} flex items-center gap-3`} >
                            <CiClock1 className={styles.icon} />
                            <strong> Recent</strong>
                        </div>


                        {sections.map((item) => (
                            <Link className={styles.sectionTabs} key={item.title} href={item.content} >{item.content}</Link>
                        ))}
                    </div>



                </div>

            </div>
        </div>
    )
}

export default MobileSidebar