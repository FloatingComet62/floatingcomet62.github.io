import socials from '@/scripts/socials';
import langs from '@/scripts/langs';
import allBlogs, { Blog, getTags } from '@/scripts/blogs';
import { useEffect, useState } from 'react';
import { Button, Switch, TagsInput } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

function intersection(blog: Blog, filterTags: string[]): boolean {
  for (const filterTag of filterTags) {
    if (!blog.tags.includes(filterTag)) {
      return false;
    }
  }
  return true;
}
function union(blog: Blog, filterTags: string[]): boolean {
  for (const filterTag of filterTags) {
    if (blog.tags.includes(filterTag)) {
      return true;
    }
  }
  return false;
}

export default function Home() {
  const [blogs, setBlogs] = useState(allBlogs);
  const [useIntersection, setUseIntersection] = useState(true);
  const [filterTags, setFilterTags] = useState<string[]>([]);

  useEffect(() => {
    if (filterTags.length == 0) {
      // No Filters
      setBlogs(allBlogs);
      return;
    }
    const filteredBlogs: Blog[] = [];
    for (const blog of allBlogs) {
      if (
        (useIntersection && intersection(blog, filterTags)) ||
        (!useIntersection && union(blog, filterTags))
      ) {
        filteredBlogs.push(blog);
      }
    }
    setBlogs(filteredBlogs);
  }, [filterTags, useIntersection]);

  return (
    <>
      <main className='flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-center mt-8'>
          <div className='flex justify-center'>
            <div className='absolute text-7xl mt-4 text-center text-purple-500 font-extrabold'>Aargh Rai</div>
            <Image src='/me.jpg' alt='Aargh Rai' className='rounded-tl-2xl rounded-bl-2xl' width={512} />
          </div>
          <div className='flex flex-col justify-between bg-stone-900 rounded-tr-2xl rounded-br-2xl p-8'>
            <div className='flex flex-col gap-4'>
              <div className='text-5xl'>Hello!</div>
              <div className='text-4xl'>I code shit</div>
            </div>
            <div className='flex gap-2 p-4'>
                  {langs.map(({ color, name }) => (
                    <div key={name} className='p-4 pt-1 pb-1 rounded-lg' style={{ backgroundColor: color }}>#{name}</div>
                  ))}
            </div>
            <div className='flex gap-8'>
              {socials.map(({ alt, image, link }) => (
                <Link key={alt} href={link} aria-label={alt}>
                  <Button className='h-20 p-4 bg-stone-950 hover:bg-stone-800 rounded-md'>
                    <Image src={image} alt={alt} />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <section className='flex gap-8 m-8 justify-evenly'>
        <div className='flex flex-col gap-8 m-8 items-center'>
          {blogs.map(({ body: _, description, link, tags, title }) => (
            <Link key={title} href={`/blogs/${link}`} className='w-[50vw]'>
              <Button fullWidth className='bg-stone-950 hover:bg-stone-900 p-8 h-48'>
                <div className='flex flex-col items-center'>
                  <div className='flex flex-row justify-between'>
                    <div>
                      <h1 className='text-3xl text-purple-400'>{title}</h1>
                      <h3 className='text-stone-500'>{description}</h3>
                    </div>
                  </div>
                  <div className='flex gap-4 mt-6'>{tags.map((tag) => (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        if (!filterTags.includes(tag)) {
                          setFilterTags([...filterTags, tag]);
                        }
                      }}
                      className='p-4 pt-2 pb-2 rounded-lg bg-stone-600 hover:bg-stone-500'
                      key={tag}
                      aria-label={`tag: ${tag}`}
                    >#{tag}</div>
                  ))}</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <TagsInput
            label="Filter blogs by tags"
            placeholder="Filters"
            data={getTags(allBlogs)}
            value={filterTags}
            onChange={setFilterTags}
          />
          <Switch
            checked={useIntersection}
            onChange={(event) => setUseIntersection(event.currentTarget.checked)}
            label="Intersection"
          />
        </div>
      </section>
    </>
  );
}
