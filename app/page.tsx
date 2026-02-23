import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();
  return (
    <main>
      <h1>ブログ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
