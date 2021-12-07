import SimpleLayout from "../../components/layout/simple";
import ProductCards from "./components/ProductCards";

export default function Shop({ data }) {
  const dutchOven = data.filter(({ category }) => {
    return category.type === "dutch oven";
  });
  const fryingPan = data.filter(({ category }) => {
    return category.type === "fry pan";
  });
  const bakeware = data.filter(({ category }) => {
    return category.type === "bakeware";
  });

  return (
    <SimpleLayout>
      <section>
        <div className="sectionThree">
          <h2 className="text-center newArivalTitle">Dutch Oven</h2>
          <div className="newArivalProducts">
            <div className="row mb-2">
              <ProductCards category={dutchOven} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sectionThree">
          <h2 className="text-center newArivalTitle">Frying Pan</h2>
          <div className="newArivalProducts">
            <div className="row mb-2">
              <ProductCards category={fryingPan} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sectionThree">
          <h2 className="text-center newArivalTitle">Bakeware</h2>
          <div className="newArivalProducts">
            <div className="row mb-2">
              <ProductCards category={bakeware} />
            </div>
          </div>
        </div>
      </section>
    </SimpleLayout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
