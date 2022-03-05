import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <Head>
        <title>first-post</title>
      </Head>
      <h1>first-post</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </Layout>
  );
}
