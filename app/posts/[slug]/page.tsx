import { getSortedPostsData, getPostData } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
