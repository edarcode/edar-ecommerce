import { ImageCarouselSc } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ImageCarousel({ image, forward, back }) {
  return (
    <ImageCarouselSc>
      <IoIosArrowBack className="left" onClick={back} />
      <img src={image} alt="" />
      <IoIosArrowForward className="right" onClick={forward} />
    </ImageCarouselSc>
  );
}
