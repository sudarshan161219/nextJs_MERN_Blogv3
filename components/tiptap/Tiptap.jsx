'use client'
import styles from "./tiptap.module.css"
import { TiptapBtn } from "@/components/export"
import { useEditor, EditorContent } from '@tiptap/react'

import { Blockquote, Document, Paragraph, Text, Bold, BulletList, ListItem } from "@/tiptaptool/tiptap"

const Tiptap = () => {

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph.configure({
                HTMLAttributes: {
                    class: 'my-custom-paragraph',
                },
            }),
            Text,
            Blockquote,
            Bold.configure({
                HTMLAttributes: {
                    class: 'my-custom-strong',
                },
            }),
            BulletList,
            ListItem
        ],
        content: `

        `,
    })


    const handlePost = () => {

    }



    if (!editor) {
        return null
    }


    return (
        <>

            <TiptapBtn editor={editor} />

            <EditorContent editor={editor} />

            <button className={styles.post} onClick={handlePost}>post</button>
        </>
    )
}

export default Tiptap