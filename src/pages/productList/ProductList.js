import ProductDetail from "../productDetail/ProductDetail";
import "./ProductList.css";

const ProductList = () => {
    return (<section>
        <p>List of Products</p>
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
    </section>);
}

export default ProductList;