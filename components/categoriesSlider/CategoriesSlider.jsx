"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Slider from "react-slick";
import bgColor from "../../src/app/data/bgColor.json";
// import catagories from "../../src/app/data/catagories.json";
import debounce from 'lodash.debounce';
import styles from "./categoriesSlider.module.css"
import { useAppContext } from '@/context/Context';


function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const CategoriesSlider = ({catagories}) => {
    const { isServer } = useAppContext();
    const [wsize, setWsize] = useState(1);
    const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });

    const sliderRef = useRef(null);


    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const handleWindowResize = debounce(() => {
            setWindowSize(getWindowSize());
        }, 200);

        resizefn();

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [resizefn]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: wsize,
        slidesToScroll: 1,
        accessibility: false,
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    let shuffledBg = shuffleArray([...bgColor]);
    shuffledBg.length = catagories.length;

    return (
        <div className='relative '>
            <button className={styles.iconBtn1} onClick={goToPrev}><AiOutlineArrowLeft className={styles.icon} /></button>

            <Slider ref={sliderRef} {...settings}>
                {catagories.map((item, idx) => (
                    <Link key={idx} href={item.herf} className={styles.list}>
                        <div style={{
                            backgroundColor: !isServer && `rgb(${item.bg}, 0.1)`,
                            color: !isServer && `rgb(${item.bg})`,
                        }} className={styles.item}>
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
                        </div>
                    </Link>
                ))}
            </Slider>
            <button className={styles.iconBtn2} onClick={goToNext}><AiOutlineArrowRight className={styles.icon} /></button>
        </div>
    )
}

export default CategoriesSlider

