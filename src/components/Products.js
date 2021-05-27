import { useEffect } from "react";
import data from "./../data";

function Products({ products, loading }) {
  return (
    <section className="products-section">
      <div className="products-section__products">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product__img-container">
                <img
                  className="product__img"
                  src={product.image}
                  alt="product image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-info__title">{product.title}</h3>
                <p className="product-info__text">{product.text}</p>
                <a className="product-info__btn">add to cart</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
