import styles from "./categoriesTabs.module.css";
import CategoriesSlider from "../categoriesSlider/CategoriesSlider";

const getData = async () => {
    const res = await fetch(`${process.env.URL}/api/categories`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    return res.json()
}

const CategoriesTabs = async () => {
    const data = await getData()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <CategoriesSlider catagories={data} />
        </div>
    );
};

export default CategoriesTabs;
