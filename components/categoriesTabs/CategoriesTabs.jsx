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
            name: "Health & Wellness",
            herf: "category/health",
            img: "https://images.unsplash.com/photo-1599986827456-8d85a9242a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            name: "Food & Cooking",
            herf: "category/food",
            img: "https://images.unsplash.com/photo-1461010083959-8a5727311252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1424&q=80"
        },
        {
            name: "Travel & Adventure",
            herf: "category/travel",
            img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
        },
        {
            name: "Technology & Gadgets",
            herf: "category/technology",
            img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        },
        {
            name: "Gaming & Entertainment",
            herf: "category/gaming",
            img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Business & Finance",
            herf: "category/Business-Finance",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Science & Nature",
            herf: "category/Science-Nature",
            img: "https://images.unsplash.com/photo-1416816901131-9e5eab64c1c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Art & Culture",
            herf: "category/Art-Culture",
            img: "https://images.unsplash.com/photo-1593523762757-704c7540b3de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Education & Learning",
            herf: "category/Education-Learning",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Sports & Fitness",
            herf: "category/Sports-Fitness",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Fashion & Beauty",
            herf: "category/Fashion-Beauty",
            img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Home & Garden",
            herf: "category/Home & Garden",
            img: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Parenting & Family",
            herf: "category/Parenting & Family",
            img: "https://images.unsplash.com/photo-1564156280315-1d42b4651629?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Relationships & Dating",
            herf: "category/Relationships & Dating",
            img: "https://images.unsplash.com/photo-1620862291688-ab7d606b7221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Self-Improvement",
            herf: "category/Self-Improvement",
            img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Books & Literature",
            herf: "category/Books & Literature",
            img: "https://images.unsplash.com/photo-1488994038434-e995b7a4ba35?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Music & Entertainment",
            herf: "category/Music & Entertainment",
            img: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Environment & Sustainability",
            herf: "category/Environment & Sustainability",
            img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Spirituality & Mindfulness",
            herf: "category/Spirituality & Mindfulness",
            img: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>

            <div className={styles.categorylist}>
                {
                    blogCategories.map((item, idx) => (
                        <Link key={idx} href={item.herf} className={styles.list}>
                            <strong className={styles.listTitle} >{item.name}</strong>
                            <Image className={styles.listimg} src={item.img} alt={item.name} width={40} height={40} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesTabs