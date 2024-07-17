const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const appRoot = require('app-root-path');

const BLOGS_DIRNAME = 'blogs';
const TSX_FILE = (file) => file.endsWith('.tsx');

const blogsFolderPath = join(appRoot.path, BLOGS_DIRNAME);
const blogsFiles = readdirSync(blogsFolderPath).filter(TSX_FILE);

const blogsFileName = [];
for (const blogFile of blogsFiles) {
    const fileName = blogFile.split('.');
    fileName.pop();
    blogsFileName.push(fileName.join('.'));
}

let data = `import { ReactNode } from 'react';

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

`;

blogsFileName.forEach((fileName, index) => {
    data += `import blog${index} from '@/blogs/${fileName}';\n`
});
data += '\nexport default [\n';
blogsFileName.forEach((fileName, index) => {
    data += `\t{ ...blog${index}, link: '${fileName}' },\n`
});
data += '\n] as Blog[];';

writeFileSync(join(__dirname, 'blogs.ts'), data);