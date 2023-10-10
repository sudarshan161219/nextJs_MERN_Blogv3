'use client'
import styles from "./tiptap.module.css"
import { TiptapBtn } from "@/components/export"
import { useEditor, EditorContent } from '@tiptap/react'
import { Blockquote, Document, Paragraph, Text, Bold, BulletList, ListItem, Code, CodeBlock } from "@/tiptaptool/tiptap"

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
            BulletList.configure({
                HTMLAttributes: {
                    class: 'my-custom-bulletList',
                },
            }), ,
            ListItem.configure({
                HTMLAttributes: {
                    class: 'my-custom-listItem',
                },
            }),
            Code.configure({
                HTMLAttributes: {
                    class: 'my-custom-code',
                },
            }),
            CodeBlock.configure({
                HTMLAttributes: {
                    class: 'my-custom-codeblock',
                },
            })
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