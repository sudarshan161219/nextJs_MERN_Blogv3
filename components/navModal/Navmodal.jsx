import styles from "./navmodal.module.css"
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });



const Navmodal = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>Navmodal</div>
    )
}

export default Navmodal