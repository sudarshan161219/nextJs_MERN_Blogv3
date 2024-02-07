"use client"
import { useEffect } from "react"
import styles from "./singlePost.module.css"
import Image from 'next/image'
import { AiOutlinePause, AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { RecommentArticles, Comments } from '../export'
import { useAppContext } from '@/context/Context'
import Link from "next/link"

const SinglePost = () => {

    const { toggleCommentsSectionFn, togglecommentsSection } = useAppContext()

    const bgcolorsArr = [
        '1, 106, 112',
        '199, 0, 57',
        '214, 123, 255',
        '101, 40, 247',
        '252, 41, 71',
        '13, 18, 130'
    ]

    let shuffledBg = bgcolorsArr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)


    useEffect(() => {
        if (togglecommentsSection) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [togglecommentsSection]);


    return (
        <div className={styles.container}>


           
                <div className={styles.Postcontainer}>
                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <div className={styles.postInfo} >
                            <div className={styles.authorInfo} >
                                <Image src='https://images.unsplash.com/photo-1693967971746-c4f294950f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="-" width={35} height={35} className={styles.authorImage} />
                                <Link href={`/author/Lorem_Ipsum`} className={styles.author} >
                                    author_21
                                </Link>
                            </div>
                            <AiOutlinePause className={styles.icon} />
                            <span className={styles.date} >Sunday, 1 Jan 2024</span>
                        </div>
                    </div>
                    <div className={styles.imgContainer} >
                        <Image src='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="-" className={styles.image} fill />
                    </div>

                    <div className={styles.likeDislikeSavePostContainer} >
                        <div className={styles.likeDislikeContainer} >
                            <div className={styles.likeContainer}>
                                <AiOutlineLike className={styles.likeIcon} />
                                <span className={styles.likeCount}>250k</span>
                            </div>

                            <div className={styles.dislikeContainer}>
                                <AiOutlineDislike className={styles.dislikeIcon} />
                                <span className={styles.dislikeCount}>25k</span>
                            </div>

                            <div onClick={toggleCommentsSectionFn} className={styles.commentContainer}>
                                <AiOutlineComment className={styles.commentIcon} />
                                <span className={styles.commentCount}>15k</span>
                            </div>

                        </div>

                        <div className={styles.savePostContainer} >
                            <BsBookmark className={styles.saveIcon} />
                        </div>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas harum aperiam, reiciendis magni maiores sunt esse unde impedit? Ullam porro nesciunt impedit quod sint repellat architecto nulla deleniti dolore, delectus doloribus, dignissimos nemo velit. Amet ex ducimus officiis! Blanditiis, necessitatibus ipsum libero ullam tenetur natus eligendi! Est dolores quidem nihil, consequatur quod eius animi? Itaque eveniet sed repellendus dignissimos earum a possimus reiciendis recusandae! Neque dolorem libero nam quae id laborum culpa. Eveniet saepe consequatur totam eos architecto autem harum ducimus delectus sunt tempore laboriosam atque iste quam corrupti incidunt, modi libero cum beatae nam itaque consectetur vero culpa! Velit, sequi, sed quos quidem temporibus adipisci omnis cum pariatur at voluptatibus enim autem eligendi odit numquam assumenda, ex ipsa nihil. Quae alias minima eligendi hic laboriosam. Dolorum ab labore ad hic ut atque quia et delectus quis repudiandae! Cupiditate nostrum facilis, ex doloremque expedita maxime quam iste repellat eveniet vero doloribus voluptate fuga hic alias eos tenetur perspiciatis sit. Molestias molestiae quibusdam voluptas fugiat quidem quo! Placeat natus quisquam odit nam, consequuntur quibusdam delectus porro autem perferendis nisi inventore, harum numquam quia debitis impedit doloremque necessitatibus rem ut aliquid at nostrum commodi facilis quasi quam. Corporis, iure aut! Aut libero atque fugit quaerat accusamus dolor, possimus magnam. Enim aliquam id reprehenderit inventore quod consequuntur similique maiores rerum excepturi unde culpa fuga, hic ratione? Excepturi, odit aspernatur totam minima fugit enim doloremque, nesciunt voluptatibus nostrum ex ducimus sunt culpa? Fugiat tempore quia tenetur earum vero blanditiis impedit nam, optio labore.</p>


                        <div className={styles.tagsContainer}>

                            {shuffledBg.map((bg, idx) => (
                                <Link
                                    href={`/tag/sunflower`}
                                    style={{
                                        backgroundColor:
                                            `${`rgb(${bg}, 0.1)`}`
                                        , color: `${`rgb(${bg})`}`
                                    }}
                                    className={styles.tag} key={idx}>
                                    Tags
                                </Link>
                            ))}

                        </div>


                    </div>
                </div>


         


            <div className={styles.commentsContainer} >
                <Comments togglecomments={togglecommentsSection} toggleCommentsFn={toggleCommentsSectionFn} />
            </div>


            <div className={styles.RecommentArticles} >
                <RecommentArticles />
            </div>

        </div>
    )
}

export default SinglePost