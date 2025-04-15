// import React from "react";
// import Button from "./Button";

// const ProductItem = () => (
//   <div className="ProductItem">
//     <div className="description">
//       <h2>고소한 바질 파스타</h2>
//       <div>6,000원</div>
//       <Button styleType="brand">주문하기</Button>
//     </div>
//     <div className="thumbnail">
//       <img src="./images/menu-고소한바질파스타.jpg" alt="고소한바질파스타 6,000원" />
//     </div>
//   </div>
// );

// export default ProductItem;
import React from "react";
import Button from "./Button";

const handleClick = () => {
  console.log("주문하기 버튼 클릭됨!");
};

const ProductItem = ({ product }) => {
  const { name, price, thumbnail } = product;
  return (
    <div className="ProductItem">
      <div className="description">
        <h2>{name}</h2>
        <div>{price}원</div>
        <Button styleType="brand" onClick={() => handleClick()}>
          주문하기
        </Button>
      </div>
      <div className="thumbnail">
        <img src={thumbnail} alt={`${name} ${price}원`} />
      </div>
    </div>
  );
};

export default ProductItem;
