import Button from "@/components/Button";

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
