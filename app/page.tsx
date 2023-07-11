import { Post } from './lib/interface';
import { getPostData } from './lib/sanity';
import Link from 'next/link';

export default async function Home() {
  const data = await getPostData() as Post[]

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 flex gap-4 justify-between">
        <h1 className="flex text-xl font-bold leading-4 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-4 md:text-4xl md:leading-8">
          Notes
        </h1>
        <Link
          href={`/recipes`}
          prefetch
          className="flex text-xl font-bold leading-4 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-4 md:text-4xl md:leading-8 text-underline"
        >Recipes</Link>
      </div>

      <ul className='note-list'>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">  
              <div>
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>  
              <Link 
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
              <div>
                <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
              </div>
              <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                {post.overview}
                </p>
                </Link>
            </article>
          </li>
        ))}
      </ul>
  </div>
  )
}
