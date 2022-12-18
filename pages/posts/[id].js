import Date from "../../components/Date";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import  { MDXRemote } from "next-mdx-remote";
import CodeBlock from "../../components/CodeBlock";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Button = ({ children }) => { 
  return (
    <button
      className="bg-black text-teal-400 text-sm py-1 px-2 rounded-md ml-2"
      onClick={() => alert(children)}
    >
      {children}
    </button>
  )
} 

const components = { Button, CodeBlock }

function Post({ postData }) {
  const router = useRouter();
  
  if (router.isFallback) { 
    return <div>Loading...</div>
  }
  
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} />}
      </article>
    </Layout>
  );
}

export default Post;