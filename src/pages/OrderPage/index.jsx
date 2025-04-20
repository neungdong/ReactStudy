import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import Title from "@/components/Title";

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
      여기에 내용
    </Page>
  </div>
);

export default OrderPage;
