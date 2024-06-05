import fs from 'fs';
import path from 'path';
import Head from 'next/head';

async function getPost(slug) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(jsonData);
  return posts.find(post => post.id.toString() === slug);
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-sm text-gray-400">
          By {post.author} on {post.date}
        </p>
      </div>
    </>
  );
}
