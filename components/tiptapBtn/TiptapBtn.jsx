"use client"
import { useState, useCallback } from "react"
import styles from "./tiptapbtn.module.css"
import {
    BsQuote,
    BsTypeBold,
    BsListUl,
    BsListOl,
    BsCodeSlash,
    BsCodeSquare,
    BsFonts,
    BsImage
} from "react-icons/bs"
import { BiHeading } from 'react-icons/bi'
import { AiOutlineHighlight, AiOutlineFontColors, AiOutlineRedo, AiOutlineUndo } from "react-icons/ai"
import { GoHorizontalRule } from "react-icons/go"
import { markHighlight, fontFamily, headings } from "@/data/data"


const initialState = {
    toggleFont: false,
    toggleHighlight: false,
    toggleHeading: false,

}
const TiptapBtn = ({ editor }) => {

    const [state, setstate] = useState(initialState)



    const handleFToggle = () => {
        setstate(prevState => (
            {
                ...prevState,
                toggleFont: !prevState.toggleFont
            }
        ))

        if (state.toggleHighlight) {
            setstate(prevState => (
                {
                    ...prevState,
                    toggleHighlight: !prevState.toggleHighlight
                }
            ))
        }
    }

    const handleHToggle = () => {
        setstate(prevState => (
            {
                ...prevState,
                toggleHighlight: !prevState.toggleHighlight
            }
        ))

        if (state.toggleFont) {
            setstate(prevState => (
                {
                    ...prevState,
                    toggleFont: !prevState.toggleFont
                }
            ))
        }
    }


    const handleHeadingToggle = () => {
        setstate(prevState => (
            {
                ...prevState,
                toggleHeading: !prevState.toggleHeading
            }
        ))
    }


    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    return (
        <div className={styles.container}>

            <div className={styles.select}>
                <span onClick={handleHeadingToggle} className={styles.span}>
                    <BiHeading className={styles.icons} />
                    <span className={styles.tooltipText}>Heading
                    </span>
                </span>
                <ul className={`${state.toggleHeading ? `${styles.isulactive} ${styles.ul}` : `${styles.ul}`}`} >
                    {headings.map((item, idx) => (
                        <li className={styles.li}
                            onClick={
                                () => { editor.chain().focus().toggleHeading({ level: item.level }).run(); handleHeadingToggle() }
                            } key={idx}>{item.name}</li>
                    ))}
                </ul>
            </div>


            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${editor.isActive('blockquote') ? `${styles.isactive}` : `${styles.btn}`}`}
            >
                <BsQuote className={styles.icons} />
                <span className={styles.tooltipText}>Block Quote</span>

            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`${editor.isActive('bold') ? `${styles.isactive} ` : `${styles.btn}`}`}
            >
                <BsTypeBold className={styles.icons} />
                <span className={styles.tooltipText}>Bold</span>

            </button>


            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${editor.isActive('bulletList') ? `${styles.isactive}` : `${styles.btn}`}`}
            >
                < BsListUl className={styles.icons} />
                <span className={styles.tooltipText}>Bullet List</span>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${editor.isActive('orderedList') ? `${styles.isactive}` : `${styles.btn}`}`}
            >
                <BsListOl className={styles.icons} />

                <span className={styles.tooltipText}>Ordered List</span>

            </button>


            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`${editor.isActive('code') ? `${styles.isactive}` : `${styles.btn}`}`}
            >
                <BsCodeSlash className={styles.icons} />
                <span className={styles.tooltipText}>Code Slash</span>
            </button >
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`${editor.isActive('codeBlock') ? `${styles.isactive}` : `${styles.btn}`}`}
            >
                < BsCodeSquare className={styles.icons} />
                <span className={styles.tooltipText}>Code Block</span>

            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}
                className={styles.btn}
            >
                <AiOutlineUndo className={styles.icons} />
                <span className={styles.tooltipText}>undo</span>

            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}
                className={styles.btn}
            >
                <AiOutlineRedo className={styles.icons} />
                <span className={styles.tooltipText}> redo</span>
            </button>

            <button className={styles.btn} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <GoHorizontalRule className={styles.icons} />
                <span className={styles.tooltipText}>Horizontal Rule</span>
            </button>
            <button className={styles.btn} onClick={addImage}>
                <BsImage className={styles.icons} />
                <span className={styles.tooltipText}>Set Image</span>
            </button>

            <div className={styles.colorContainer}>
                <input
                    className={styles.input}
                    type="color"
                    id="color"
                    onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                    value={editor.getAttributes('textStyle').color}
                    data-testid="setColor"
                />
                <label className={styles.span} htmlFor="color">
                    <AiOutlineFontColors className={styles.icons} />
                    <span className={styles.tooltipText}>Text Color</span>
                </label>
                <button
                    onClick={() => editor.chain().focus().unsetColor().run()}
                    data-testid="unsetColor"
                >
                    unsetColor
                </button>
            </div>


            <div className={styles.select} >
                <span onClick={handleFToggle} className={styles.span}>
                    <BsFonts className={styles.icons} />
                    <span className={styles.tooltipText}>Font Family</span>
                </span>
                <ul className={`${state.toggleFont ? `${styles.isulactive} ${styles.ul}` : `${styles.ul}`}`}>

                    {fontFamily.map((item, idx) => (
                        <li
                            key={idx}
                            onClick={() => { editor.chain().focus().setFontFamily(item.fontFamily).run(); handleFToggle() }}
                            className={styles.li}
                        >{item.name}</li>
                    ))}



                    <li
                        className={styles.li}
                        onClick={() => editor.chain().focus().unsetFontFamily().run()}
                    > unsetFontFamily</li>
                </ul>
            </div>



            <div className={styles.select}  >
                <span onClick={handleHToggle} className={styles.span}>
                    <AiOutlineHighlight className={styles.icons} />
                    <span className={styles.tooltipText}>Highlight</span>
                </span>
                <ul className={`${state.toggleHighlight ? `${styles.isulactive} ${styles.ul}` : `${styles.ul}`}`}>



                    <li
                        onClick={() => { editor.chain().focus().toggleHighlight().run(); handleHToggle() }}
                        className={styles.li}
                    >toggleHighlight</li>
                    {markHighlight.map((item, idx) => (
                        <li
                            key={idx}
                            onClick={() => { editor.chain().focus().toggleHighlight({ color: item.color }).run(); handleHToggle() }}
                            className={`${state.toggleHighlight ? `${styles.isliactive} ${styles.li}` : `${styles.li}`}`}
                        > {item.name} </li>
                    ))}



                </ul>
            </div>






        </div>
    )
}

export default TiptapBtn