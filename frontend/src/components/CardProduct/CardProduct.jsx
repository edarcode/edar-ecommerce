import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { CardProductSc } from "./style";

export default function CardProduct({ id, name, price, images }) {
  if (!id) return null;
  return (
    <CardProductSc>
      <header>
        <h6>{name}</h6>
      </header>
      <ImageCarousel images={images} />
      <footer>${price}</footer>
    </CardProductSc>
  );
}
