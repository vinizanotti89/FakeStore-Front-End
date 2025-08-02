import PropTypes from 'prop-types';

export function CardProduct({ product }) {
  return (
    <div className="card-product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};