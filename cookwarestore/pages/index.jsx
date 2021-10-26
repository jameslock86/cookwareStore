import Head from "next/head";
import Link from "next/link";
import SimpleLayout from "../components/layout/simple.jsx";

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Cookware and Cookbooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Subscribe to GyanBlog</h1>
          <p className="lead text-muted">
            Learn and Share
          </p>
        </div>
      </section>

      <div className="row">
        <h1>Hey People</h1>
        <p>
          For understanding of this project, see: 
        </p>
      </div>
    </SimpleLayout>

    </div>
  );
}

export async function getInitialProps(context) {
  return {
    props: {  },
  };
}
