"use client"
import styles from "./tiptapbtn.module.css"
import {
    BsQuote,
    BsTypeBold,
    BsListUl
} from "react-icons/bs"


const TiptapBtn = ({ editor }) => {
    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                <BsQuote className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <BsTypeBold className={styles.icons} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                < BsListUl className={styles.icons} />
            </button>
        </>
    )
}

export default TiptapBtn