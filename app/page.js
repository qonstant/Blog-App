import fs from 'fs';
import path from 'path';

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(jsonData);
  return posts;
}

export default async function Page() {
  const posts = await getData();

  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow">
            <a href={`/${post.id}`} className="text-xl font-bold text-blue-600">{post.title}</a>
            <p className="text-gray-600">{post.description}</p>
            <p className="text-sm text-gray-400">
              By {post.author} on {post.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
