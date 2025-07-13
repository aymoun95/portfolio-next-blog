import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../../components/MDXComponents';
import BlogLayout from '../../layouts/blog';
import { getFileBySlug, getFiles } from '../../lib/mdx';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.md/, '')
      }
    })),
    fallback: false
    /* we don't need next at run time works with router.isFallback 
     to send response to the client in case of ssr or isg
     router.isFallback will have a meaning if fallback is set to true to send 
     loading state for example while ISR
     we can do blocking on ISR to recreate the same behaviour as ssr in getServerSideProps
  */
  };
}

// getSaticPaths runs then passes the paths to getStaticProps to generate pages
export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
