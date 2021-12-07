import SingleCard from "./SingleCard";
const ProductCards = ({ category }) => {
  return category.map(({ title, price, description, image }) => {
    return (
      <div key={title} className="col-md-3">
        <SingleCard
          title={title}
          price={price}
          desc={description}
          image={image}
        />
      </div>
    );
  });
};
export default ProductCards;
