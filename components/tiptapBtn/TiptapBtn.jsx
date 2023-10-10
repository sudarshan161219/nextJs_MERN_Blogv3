"use client"
import styles from "./tiptapbtn.module.css"
import {
    BsQuote,
    BsTypeBold,
    BsListUl,
    BsCodeSlash,
    BsCodeSquare
} from "react-icons/bs"


const TiptapBtn = ({ editor }) => {
    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : `${styles.btn}`}
            >
                <BsQuote className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={  `${editor.isActive('bold') ?  `${styles.isactive} ` : `${styles.btn}` }` }
            >
                <BsTypeBold className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : `${styles.btn}`}
            >
                < BsListUl className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : `${styles.btn}`}
            >
                <BsCodeSlash className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : `${styles.btn}`}
            >
                < BsCodeSquare className={styles.icons} />
            </button>
        </>
    )
}

export default TiptapBtn