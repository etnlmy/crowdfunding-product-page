import Product from "../components/product/Product";
import productData from "../data/mastercraft-bamboo-monitor-riser.json";

function ProductPage() {
  return (
    <div className="ProductPage">
      <header></header>
      <Product data={JSON.parse(JSON.stringify(productData))} />
    </div>
  );
}

export default ProductPage;
