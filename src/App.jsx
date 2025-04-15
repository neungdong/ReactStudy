import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProductItem from "./components/ProductItem";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const refined = res.data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        }));
        setProducts(refined);
      })
      .catch((err) => {
        console.error("상품 데이터를 불러오는데 실패했습니다.", err);
      });
  }, []);

  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          <Title>메뉴목록</Title>
        </header>
        <main>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </main>
        <footer>
          <Navbar />
        </footer>
      </div>
    </div>
  );
};

export default App;
