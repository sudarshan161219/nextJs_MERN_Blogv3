import styles from "./recentTags.module.css"
import Image from "next/image"

const RecentTags = () => {
  return (
    <article className={`${styles.article} flex transition hover:shadow-xl`}>
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span className={styles.spanDate}>2022</span>
          <span className={`${styles.spanLine} w-px flex-1`}></span>
          <span className={styles.spanDate}>Oct 10</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56 relative">
        < Image
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="aspect-square h-full w-full object-cover"
          fill
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className={`${styles.h3} font-bold uppercase`}>
              Finding the right guitar for your style - 5 tips
            </h3>
          </a>

          <p className={`${styles.para} mt-2 line-clamp-3 text-sm/relaxed`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>
  )
}

export default RecentTags