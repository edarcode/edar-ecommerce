import { useEffect } from "react";
import { ProductSc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../redux/reducers/product/actions";
import { useParams } from "react-router-dom";
import DetailProduct from "../../components/common/DetailProduct/DetailProduct";
import Gallery from "../../components/common/Gallery/Gallery";

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { images, ...otros } = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getDetailProduct({ id }));
  }, [dispatch, id]);
  return (
    <ProductSc>
      <Gallery images={images && images.map(({ url }) => url)} />
      <DetailProduct {...otros} className="detail-product" />
    </ProductSc>
  );
}
