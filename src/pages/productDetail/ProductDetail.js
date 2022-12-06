import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
    const params = useParams();
    const id = params.id;

    return (<section>
        <p>Detail for id {id}</p>
    </section>);
}

export default ProductDetail;