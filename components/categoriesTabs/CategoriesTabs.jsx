import React from 'react'
import styles from "./categoriesTabs.module.css"
import Link from 'next/link';
import Image from 'next/image';

const CategoriesTabs = () => {

    const blogCategories = [
        {
            name: "Lifestyle",
            herf: "category/lifestyle",
            img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Health",
            herf: "category/health",
            img: "https://images.unsplash.com/photo-1599986827456-8d85a9242a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            name: "Food",
            herf: "category/food",
            img: "https://images.unsplash.com/photo-1461010083959-8a5727311252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1424&q=80"
        },
        {
            name: "Travel",
            herf: "category/travel",
            img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
        },
        {
            name: "Technology",
            herf: "category/technology",
            img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        },
        {
            name: "Gaming",
            herf: "category/gaming",
            img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }

    ];


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>

            <ul className={styles.categorylist}>
                {
                    blogCategories.map((item, idx) => (
                        <li key={idx} className={styles.list}>
                            <Link className={styles.listTitle} href={item.herf}>{item.name}</Link>
                            <Image className={styles.listimg} src={item.img} alt={item.name} width={40} height={40} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoriesTabs