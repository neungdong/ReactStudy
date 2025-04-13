import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Button from "./components/Button";
import ProductItem from "./components/ProductItem";

const App = () => {
  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          <Title>메뉴목록</Title>
        </header>
        <main>
          <ul>
            <li>
              <div className="ProductItem">
                <div className="description">
                  <h2>고소한 바질 파스타</h2>
                  <div>6,000원</div>
                  <Button styleType="brand-solid">결제하기</Button>
                </div>
                <div className="thumbnail">
                  <img src="./images/menu-고소한바질파스타.jpg" alt="고소한바질파스타 6,000원" />
                </div>
              </div>
              <ProductItem />
            </li>
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
