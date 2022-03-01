import { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { CgShoppingCart } from "react-icons/cg";
import { CardProductSc } from "./style";

export default function CardProduct({ id, name, price, images }) {
  const [indexImage, setIndexImage] = useState(0);
  const sizeImages = images.length - 1;

  const handleOnClickForward = () => {
    if (indexImage === sizeImages) {
      return setIndexImage(0);
    }
    if (indexImage < sizeImages) {
      setIndexImage((state) => state + 1);
    }
  };
  const handleOnClickBack = () => {
    if (indexImage === 0) {
      return setIndexImage(sizeImages);
    }
    if (indexImage > 0) {
      setIndexImage((state) => state - 1);
    }
  };

  if (!id) return null;
  return (
    <CardProductSc>
      <header>
        <h6>{name}</h6>
      </header>
      <ImageCarousel
        id={id}
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
