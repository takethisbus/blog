import Head from "next/head";
import Layout from "../../components/Layout";

function firstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <h1>
        첫번째 글
      </h1>
    </Layout>
  );
}

export default firstPost;