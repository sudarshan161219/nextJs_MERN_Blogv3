'use client'
import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'


import styles from "./tiptap.module.css"

const Tiptap = () => {
    const [text, setText] = useState()
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Blockquote,
        ],
        content: `

        `,
    })

    console.log(html);

    const handlePost = () => {

    }



    if (!editor) {
        return null
    }



    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                toggleBlockquote
            </button>
            <EditorContent editor={editor} />

            <button className={styles.post} onClick={handlePost}>post</button>
        </>
    )
}

export default Tiptap