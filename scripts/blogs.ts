import { ReactNode } from 'react';

export type BlogFileType = {
    title: string;
    description: string;
    tags: string[];
    body: ReactNode;
};
export type Blog = BlogFileType & { link: string; };

export function getBlog(blogs: Blog[], link: string): Blog | undefined {
    return blogs.find((blog) => blog.link == link);
}
export function getTags(blogs: Blog[]): string[] {
    const allTags: string[] = [];
    blogs.forEach(({ tags }) => {
        for (const tag of tags) {
            if (!allTags.includes(tag)) {
                allTags.push(tag);
            }
        }
    })
    return allTags;
}

import blog0 from '@/blogs/algorithmic_harmony';

export default [
	{ ...blog0, link: 'algorithmic_harmony' },

] as Blog[];