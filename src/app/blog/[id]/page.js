import { getPostById } from '@/lib/posts';

export async function getStaticPaths() {
  const posts = getAllPosts(); // Mock function

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id);

  if (!post) {
    return { notFound: true }; // Error handling added here
  }

  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
    </main>
  );
}
