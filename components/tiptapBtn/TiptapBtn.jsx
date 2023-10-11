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

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       showList: false,
    //       defaultSelectText: "Please select an option",
    //       countryList: [
    //         { id: 1, name: "Australia" },
    //         { id: 2, name: "Brazil" },
    //         { id: 3, name: "China" },
    //         { id: 4, name: "Denmark" },
    //         { id: 5, name: "Egypt" },
    //         { id: 6, name: "Finland" },
    //         { id: 7, name: "Ghana" },
    //         { id: 8, name: "Hungary" },
    //         { id: 9, name: "India" },
    //         { id: 10, name: "Japan" }
    //       ]
    //     };
    //   }

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
                className={`${editor.isActive('bold') ? `${styles.isactive} ` : `${styles.btn}`}`}
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
            {/* <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : `${styles.btn}`}
            >
                < BsCodeSquare className={styles.icons} />
            </button> */}
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                < BsCodeSquare className={styles.icons} />
            </button>

            <input
                type="color"
                onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color}
                data-testid="setColor"
            />

            <button
                onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
                className={editor.isActive('textStyle', { fontFamily: 'Inter' }) ? 'is-active' : ''}
            >
                Inter
            </button>
            <button
                onClick={() => editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}
                className={
                    editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })
                        ? 'is-active'
                        : ''
                }
            >
                Comic Sans
            </button>
            <button
                onClick={() => editor.chain().focus().setFontFamily('serif').run()}
                className={editor.isActive('textStyle', { fontFamily: 'serif' }) ? 'is-active' : ''}
            >
                serif
            </button>
            <button
                onClick={() => editor.chain().focus().setFontFamily('monospace').run()}
                className={editor.isActive('textStyle', { fontFamily: 'monospace' }) ? 'is-active' : ''}
            >
                monospace
            </button>
            <button
                onClick={() => editor.chain().focus().setFontFamily('cursive').run()}
                className={editor.isActive('textStyle', { fontFamily: 'cursive' }) ? 'is-active' : ''}
            >
                cursive
            </button>
            <button onClick={() => editor.chain().focus().unsetFontFamily().run()}>
                unsetFontFamily
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={editor.isActive('highlight') ? 'is-active' : ''}
            >
                toggleHighlight
            </button>


            <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()}
                className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
            >
                orange
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()}
                className={editor.isActive('highlight', { color: '#8ce99a' }) ? 'is-active' : ''}
            >
                green
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()}
                className={editor.isActive('highlight', { color: '#74c0fc' }) ? 'is-active' : ''}
            >
                blue
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()}
                className={editor.isActive('highlight', { color: '#b197fc' }) ? 'is-active' : ''}
            >
                purple
            </button>

   

        </>
    )
}

export default TiptapBtn