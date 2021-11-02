import Head from "next/head";
import Link from "next/link";
import SimpleLayout from "../components/layout/simple.jsx";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

//images
import  Image  from "next/image";
import Section2Image from '../public/4qrtPot.jpg'
import Section2Image2 from '../public/10inFryPan.jpg'
import Section2Image3 from '../public/breadPan.jpg'

const backgroundStyling = {
  backgroundImage: `url('../BackgroundHeroImage.jpg')`,
  
}


export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Cookware and Cookbooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleLayout>
        <section>
            <div className="hero" style={backgroundStyling} layout="responsive">
              <div className="heroBody ">
                <h1 className="heroTitle"> Cookware and Cookbook</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto, exercitationem obcaecati nihil.</p>
                <button><a href="#">Lean More</a></button>
              </div>  
            </div>
            <div className="overlay"></div>
        </section>
        <section>
        
          <div className="sectionTwo ">        
            <div className="row mb-2">
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Dutch Ovens</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image} width={100} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Frying Pans</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image2} width={100} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 section2Title">Bakeware</strong>       
                    <a href="#" className="section2Link">See More...</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image alt="Vercel logo" src={Section2Image3} width={100} height={100} />        

                  </div>
                </div>
              </div>
              </div>
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
