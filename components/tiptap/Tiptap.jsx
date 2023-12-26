'use client'
import { useState } from "react"
import styles from "./tiptap.module.css"
import { TiptapBtn } from "@/components/export"
import { useEditor, EditorContent } from '@tiptap/react'
import { Heading, Blockquote, Document, Paragraph, Text, Bold, BulletList, ListItem, Code, CodeBlock, CodeBlockLowlight, lowlight, Color, TextStyle, Dropcursor, FontFamily, HardBreak, Highlight, History, HorizontalRule, Image, OrderedList, Italic, Link, Strike, Subscript, Underline, TextAlign } from "@/tiptaptool/tiptap"
import Placeholder from '@tiptap/extension-placeholder'

const Tiptap = () => {
    const [editorContent, setEditorContent] = useState("");
    const editor = useEditor({
        extensions: [
            Document,
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6],
                HTMLAttributes: {
                    class: 'my-custom-heading',
                },
            }),
            Paragraph.configure({
                HTMLAttributes: {
                    class: 'my-custom-paragraph',
                },
            }),
            Text,
            Blockquote,
            TextStyle,
            Dropcursor,
            FontFamily,
            HardBreak,
            History,
            HorizontalRule,
            Image,
            Italic,
            Strike,
            Underline,
            Placeholder,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Subscript.configure({
                HTMLAttributes: {
                    class: 'my-custom-subscript',
                },
            }),
            Link.configure({
                openOnClick: false,
            }),
            Highlight.configure({ multicolor: true }),
            Bold.configure({
                HTMLAttributes: {
                    class: 'my-custom-strong',
                },
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: 'my-custom-orderedList',
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'my-custom-bulletList',
                },
            }),
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
            CodeBlockLowlight.configure({
                lowlight,
                HTMLAttributes: {
                    class: 'my-custom-codeblocklowlight',
                },
            }),
            Color.configure({
                types: ['textStyle'],
            }),
            Placeholder.configure({
                emptyEditorClass: 'is-editor-empty',
            })
        ],
        content: `

        `,
        onUpdate({ editor }) {
            setEditorContent(editor.getHTML());
        },
    })


    const handlePost = () => {
        console.log(editorContent);
    }



    if (!editor) {
        return null
    }


    return (
        <>

            <TiptapBtn editor={editor} />

            <div className="mt-3 mb-3" >
                <EditorContent editor={editor} />
            </div>

            <button className={styles.post} onClick={handlePost}>post</button>
            {/* <div dangerouslySetInnerHTML={{ __html: editorContent }} /> */}
        </>
    )
}

export default Tiptap