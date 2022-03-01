import { useEffect, useState } from "react";
import { ProductSc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../redux/reducers/product/actions";
import { useParams } from "react-router-dom";
import DetailProduct from "../../components/common/DetailProduct/DetailProduct";
import Gallery from "../../components/common/Gallery/Gallery";
import Spinner from "../../components/common/Spinner/Spinner";

export default function Product() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { images, ...otros } = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getDetailProduct({ id, setLoading }));
  }, [dispatch, id]);
  return (
    <ProductSc>
      {(loading && (
        <section className="container-gallery-detail">
          <Gallery images={images && images.map(({ url }) => url)} />
          <DetailProduct {...otros} className="detail-product" />
        </section>
      )) || <Spinner />}
    </ProductSc>
  );
}
