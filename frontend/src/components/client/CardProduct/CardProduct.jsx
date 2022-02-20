import { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { CgShoppingCart } from "react-icons/cg";
import { CardProductSc } from "./style";

export default function CardProduct({ id, name, price, images }) {
  const [indexImage, setIndexImage] = useState(0);

  const handleOnClickForward = () => {
    const sizeImages = images.length - 1;
    if (indexImage < sizeImages) {
      setIndexImage(indexImage + 1);
    }
  };
  const handleOnClickBack = () => {
    if (indexImage > 0) {
      setIndexImage(indexImage - 1);
    }
  };

  if (!id) return null;
  return (
    <CardProductSc>
      <header>
        <h6>{name}</h6>
      </header>
      <ImageCarousel
        image={images[indexImage].url}
        forward={handleOnClickForward}
        back={handleOnClickBack}
      />
      <footer>
        ${price} <CgShoppingCart />
      </footer>
    </CardProductSc>
  );
}
