import { useState } from "react";
import { GallerySc } from "./style";

export default function Gallery({ images, className }) {
  const [indexImages, setIndexImages] = useState(0);
  const handleOnClickIndexImages = (e) => {
    const indexId = e.target.id;
    setIndexImages(indexId);
  };
  return (
    <GallerySc sizeImages={images && images.length} className={className}>
      <img className="main-image" src={images && images[indexImages]} alt="" />
      <div className="secondary-images">
        {images &&
          images.map((url, index) => (
            <img
              key={index}
              id={index}
              src={url}
              alt="producto"
              onClick={handleOnClickIndexImages}
            />
          ))}
      </div>
    </GallerySc>
  );
}
