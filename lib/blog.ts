import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  authorLinkedIn: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        author: data.author,
        authorRole: data.authorRole,
        authorLinkedIn: data.authorLinkedIn,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        readingTime: data.readingTime,
        content,
      } as BlogPost;
    });

  return allPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    author: data.author,
    authorRole: data.authorRole,
    authorLinkedIn: data.authorLinkedIn,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    readingTime: data.readingTime,
    content,
  } as BlogPost;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.filter((fileName) => fileName.endsWith('.mdx')).map((fileName) => fileName.replace(/\.mdx$/, ''));
}
