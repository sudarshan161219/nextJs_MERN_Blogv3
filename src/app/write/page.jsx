import styles from "./write.module.css"
import { Tiptap } from "@/components/export"
import Link from "next/link"

const page = () => {
    return (
        <div className={styles.container}>
            <nav> <Link href={"/"} className={styles.textLogo}>SH || BLOG</Link></nav>
            <header>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className={`${styles.heading} text-2xl font-bold sm:text-3xl`}>Welcome Back, Barry!</h1>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <button
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className="text-sm font-medium"> Draft Post </span>

                            </button>

                            <button
                                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                Create Post
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <Tiptap />
        </div>
    )
}

export default page