'use client'
import { useState } from "react"
import styles from "./tiptap.module.css"
import { TiptapBtn } from "@/components/export"
import { useEditor, EditorContent } from '@tiptap/react'
import { CiCirclePlus, CiImageOn, CiLink } from "react-icons/ci";
import { Heading, Blockquote, Document, Paragraph, Text, Bold, BulletList, ListItem, Code, CodeBlock, CodeBlockLowlight, lowlight, Color, TextStyle, Dropcursor, FontFamily, HardBreak, Highlight, History, HorizontalRule, Image, OrderedList, Italic, Link, Strike, Subscript, Underline, TextAlign } from "@/tiptaptool/tiptap"
import Placeholder from '@tiptap/extension-placeholder'
import { convertToBase64 } from "@/src/utils/convert"
import { MdDeleteOutline } from "react-icons/md";

const Tiptap = () => {
    const [editorContent, setEditorContent] = useState("");
    const [file, setFile] = useState();
    const [onMedia, setOnMedia] = useState(false)

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


    const onUpload = async (e) => {
        try {
            const base64 = await convertToBase64(e.target.files[0]);
            setFile(base64);
        } catch (error) {
            console.log(error);
        }
    };


    const handleMedia = () => {
        setOnMedia(!onMedia)
    }

    const handleRemove = () => {
        setFile();
    }


    if (!editor) {
        return null
    }

    return (
        <>
            <form>
                <input className={styles.titleInput} type="text" placeholder="title" />

                {/* <div className={styles.mediaContainer} >
                    <CiCirclePlus onClick={ handleMedia }  className={styles.plus} />

                    <ul className={`${onMedia ? `${styles.showMedia} ${styles.media}` : `${styles.media}`}`}>
                        <li><CiImageOn className={styles.mediaIcon} /></li>
                        <li>< CiLink className={styles.mediaIcon} /></li>
                    </ul>
                </div> */}

                <div className={styles.coverimgcontainer}>
                    {file && <div onClick={handleRemove} className={styles.deleteContainer}><MdDeleteOutline className={styles.deleteIcon} /></div>}
                    <label className={styles.imagelabel} htmlFor="cover-image">

                        {!file && <CiImageOn className={styles.mediaIcon} />}
                        {
                            file &&
                            <img
                                className={styles.coverimg}
                                src={file}
                                alt="loading"
                            />}
                    </label>
                    <input
                        type="file"
                        id="cover-image"
                        className={styles.fileInput}
                        onChange={onUpload}
                        accept="image/*"
                    />
                </div>
            </form>
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