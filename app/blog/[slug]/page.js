export default function BlogPostPage({ params }) {
  // params.slug will be the slug of the blog post
  return (
    <main>
      <h1>Blog Post: {params.slug}</h1>
    </main>
  );
}
