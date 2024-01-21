import styles from "./write.module.css"
import { Tiptap } from "@/components/export"
import Link from "next/link"

const page = () => {
    return (
        <div className={styles.container}>
            <nav className="p-3 flex items-center justify-between">
                <Link href={"/"} className={styles.textLogo}>SH || BLOG</Link>

                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <button
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                        type="button"
                    >
                        <span className="text-sm font-medium"> Draft Post </span>

                    </button>

                    <button
                        className="block rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button"
                    >
                        Create Post
                    </button>
                </div>
            </nav>
            <Tiptap />
        </div>
    )
}

export default page