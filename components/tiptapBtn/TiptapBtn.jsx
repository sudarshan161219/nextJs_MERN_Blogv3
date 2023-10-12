"use client"
import { useState } from "react"
import styles from "./tiptapbtn.module.css"
import {
    BsQuote,
    BsTypeBold,
    BsListUl,
    BsCodeSlash,
    BsCodeSquare,
    BsFonts
} from "react-icons/bs"
import { AiOutlineHighlight, AiOutlineFontColors } from "react-icons/ai"
import { markHighlight, fontFamily } from "@/data/data"


const initialState = {
    toggleFont: false,
    toggleHighlight: false,

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


    return (
        <div className={styles.container}>
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
                            onClick={() => editor.chain().focus().setFontFamily(item.fontFamily).run()}
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
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={styles.li}
                    >toggleHighlight</li>
                    {markHighlight.map((item, idx) => (
                        <li
                            key={idx}
                            onClick={() => editor.chain().focus().toggleHighlight({ color: item.color }).run()}
                            className={`${state.toggleHighlight ? `${styles.isliactive} ${styles.li}` : `${styles.li}`}`}
                        > {item.name} </li>
                    ))}



                </ul>
            </div>






        </div>
    )
}

export default TiptapBtn