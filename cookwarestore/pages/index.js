import Head from "next/head";
import Link from "next/link";
import SimpleLayout from "../components/layout/simple.jsx";

import clientPromise from '../lib/mongodb';

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

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
