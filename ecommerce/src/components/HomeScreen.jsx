import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetch();

    return () => {};
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img className="product-image" src="d1.jpg" alt="product" />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
