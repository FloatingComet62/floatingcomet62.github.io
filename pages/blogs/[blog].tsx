import blogs, { getBlog } from '@/scripts/blogs';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticPaths = (async () => {
    const paths = blogs.map(({ link }) => ({
        params: { blog: link }
    }));
    return {
        paths,
        // { fallback: false } means other routes should 404
        fallback: false,
    };
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
    const blogData = context.params!.blog;
    let blogName = '';
    if (typeof blogData == 'string') {
        blogName = blogData;
    } else if (typeof blogData == 'object') {
        blogName = blogData[0];
    }
    return { props: { blogName } };
}) satisfies GetStaticProps<{ blogName: string }>

export default function Page({
  blogName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { body, description, link, tags, title } = getBlog(blogs, blogName)!;
    return <main className='flex flex-col gap-4 items-center mt-8 p-8 bg-stone-950'>
        <h1 className='text-3xl text-purple-400'>{title}</h1>
        <h3 className='text-stone-500'>{description}</h3>
        <div className='flex gap-4 mt-6 mb-6'>{tags.map((tag) => (
            <div className='p-4 pt-2 pb-2 rounded-lg bg-stone-600 hover:bg-stone-500' key={tag} aria-label={`tag: ${tag}`}>#{tag}</div>
        ))}</div>
        <div>{body}</div>
    </main>
}