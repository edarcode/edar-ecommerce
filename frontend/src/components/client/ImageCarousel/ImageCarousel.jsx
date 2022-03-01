import { ImageCarouselSc } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { product } from "../../../consts/pathRoutes";

export default function ImageCarousel({ image, forward, back, id }) {
  return (
    <ImageCarouselSc>
      <IoIosArrowBack className="left" onClick={back} />
      <Link to={`${product}/${id}`}>
        <img src={image} alt="" />
      </Link>
      <IoIosArrowForward className="right" onClick={forward} />
    </ImageCarouselSc>
  );
}
