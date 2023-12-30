"use client"
import { useState, useRef, useEffect } from 'react';
import styles from "./categoriesTabs.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import catagories from "../../src/app/data/catagories.json"


const CategoriesTabs = () => {
    const [wsize, setWsize] = useState(1);
    const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });

    const sliderRef = useRef(null);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    function resizefn() {
        const { innerWidth } = windowSize;
        if (innerWidth <= 500) {
            setWsize(1);
        } else if (innerWidth >= 500 && innerWidth < 700) {
            setWsize(2);
        } else if (innerWidth >= 700 && innerWidth < 1020) {
            setWsize(4);
        } else if (innerWidth >= 1020 && innerWidth < 1280) {
            setWsize(4);
        } else if (innerWidth >= 1280) {
            setWsize(5);
        }
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        resizefn();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);


    const settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: wsize,
        slidesToScroll: 1
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>

            <div className='relative '>
                <button className={styles.iconBtn1} onClick={goToPrev}><AiOutlineArrowLeft className={styles.icon} /></button>

                <Slider ref={sliderRef} {...settings}>
                    {
                        catagories.map((item, idx) => (
                            <Link key={idx} href={item.herf} className={styles.list}>
                                <motion.div className={styles.item}>
                                    <strong className={styles.listTitle}>{item.name}</strong>
                                    <div className={styles.imgContainer} >
                                        <Image
                                            className={styles.listimg}
                                            src={item.img}
                                            alt={item.name}
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33.3vw, 25vw"
                                        />
                                    </div>
                                </motion.div>
                            </Link>
                        ))
                    }
                </Slider>
                <button className={styles.iconBtn2} onClick={goToNext}><AiOutlineArrowRight className={styles.icon} /></button>
            </div>
        </div>
    );
};

export default CategoriesTabs;
