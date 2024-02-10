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
import categories from "@/src/app/data/catagories.json"
import { ConfigProvider, Select } from 'antd';



const Tiptap = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        category: '',
        coverImg: '',
        tags: []
    });
    const [editorContent, setEditorContent] = useState("");
    const [file, setFile] = useState();
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
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
            setFormData((prevData) => ({
                ...prevData,
                content: editor.getHTML(),
            }));
        },
    })


    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const onChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            category: value,
        }));
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePost = () => {
        console.log(editorContent);

    }

    const handleDraft = () => {
        const { content } = formData;
        setFormData((prevData) => ({
            ...prevData,
            content: editorContent,
        }));
    }

    const handlePublish = () => {
        console.log(formData);
    }

    const onUpload = async (e) => {
        try {
            const base64 = await convertToBase64(e.target.files[0]);
            setFile(base64);
            setFormData((prevData) => ({
                ...prevData,
                coverImg: base64,
            }));
        } catch (error) {
            console.log(error);
        }
    };


    const handleMedia = () => {
        setOnMedia(!onMedia)
    }

    const handletagInput = (e) => {
        setTag(e.target.value)
        e.target.value = ''
        // if (e.key === 'Enter') {
        // handlePushTag(e.target.value);
        //    ; // Clear input after adding tag
        //   }
    }

    const handlePushTag = (e) => {
        if (tags.includes(tag)) {
            return
        }
        setTags([...tags, tag])
        setTag("");
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setTags([...tags, tag])
            setTag("");
        }
    }

    const handleRemove = () => {
        setFile();
    }

    const mappedOptions = categories.map(option => ({
        value: option.name,
        label: option.name.toUpperCase(),
    }));


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    if (!editor) {
        return null
    }

    return (
        <main>
            <nav className="p-3 flex items-center justify-between">
                <a href={"/"} className={styles.textLogo}>SH || BLOG</a>

                <div className="flex items-center gap-3" >

                    <button onClick={handleDraft} className={styles.button4} role="button">Draft</button>
                    <button onClick={handlePublish} className={styles.button3} role="button">Publish</button>

                </div>
            </nav>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input className={styles.titleInput} value={formData.title} onChange={handleInputChange} name="title" type="text" placeholder="title" />

                    <textarea className={styles.textarea} value={formData.description} onChange={handleInputChange} name="description" placeholder="description" rows="10"></textarea>


                    <Select
                        showSearch
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={mappedOptions}
                    />

                    <div className={styles.input_btn_container}>
                        <input type="text" value={tag} onKeyDown={handleKeyDown} onChange={handletagInput} className={styles.tagInput} placeholder="enter tags" />
                        <button onClick={handlePushTag} type="button" className={styles.addtagBtn}>add tag</button>
                    </div>

                    {tags.length > 1 && <div className={styles.tagsContainer} >
                        <ul className="flex gap-3">
                            {tags.map((item) => (
                                <li className={styles.litag} key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    }

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
                    <button type="submit">save</button>
                </form>
                <TiptapBtn editor={editor} />

                <div className="mt-3 mb-3" >
                    <EditorContent editor={editor} />
                </div>




                {/* <button className={styles.post} onClick={handlePost}>post</button> */}
                {/* <div dangerouslySetInnerHTML={{ __html: editorContent }} /> */}
            </div>
        </main>

    )
}

export default Tiptap