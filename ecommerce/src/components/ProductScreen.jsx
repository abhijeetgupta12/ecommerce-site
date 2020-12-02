import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../componentStyle/productScreen.css";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      console.log("hello_before");
      const { data } = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );

      setProduct(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to results</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src="d1.jpg" alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: $<b>${product.price}</b>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
