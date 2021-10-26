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
        <section>
          <div className="hero">
            <h1 className="heroTitle"> Cookware and Cookbook</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
            <button><a href="#">Lean More</a></button>
          </div>
        </section>
        <section>
          <div className="sectionTwo">

          </div>
        </section>
        <section>
          <div className="sectionThree">
            <h2>New Arivals</h2>
            <div className="newArivalProducts">
              
            </div>
            <button>
              <a href="#">SEE MORE PRODUCTS</a>
            </button>
          </div>
        </section>
        <section>
          <div className="sectionFour">
            <h2 className="sectionFourTitle">Our Cookbook</h2>
          </div>
        </section>

    </SimpleLayout>

    </div>
  );
}

export async function getInitialProps(context) {
  return {
    props: {  },
  };
}
