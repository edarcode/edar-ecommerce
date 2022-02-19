import { ImageCarouselSc } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ImageCarousel({ images }) {
  return (
    <ImageCarouselSc>
      <IoIosArrowBack className="left" onClick={() => console.log("oe!")} />
      <img src={images[0].url} alt="" />
      <IoIosArrowForward className="right" />
    </ImageCarouselSc>
  );
}
