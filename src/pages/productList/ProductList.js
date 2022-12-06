import Navigation from "../../components/navigation/Navigation";
import ProductDetail from "../productDetail/ProductDetail";
import "./ProductList.css";

const ProductList = () => {
    return (<section>
        <Navigation />
        <p>List of Products</p>
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
    </section>);
}

export default ProductList;