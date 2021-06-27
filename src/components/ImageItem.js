import React, { useState, useEffect, useRef } from "react";

const ImageItem = ({ image }) => {
  const [span, setSpan] = useState(0);

  useEffect(() => {
    refImage.current.addEventListener("load", () => {
      const imageHeight = refImage.current.clientHeight;
      let imageSpan;
      if (imageHeight % 20 > 15) {
        imageSpan = Math.ceil(imageHeight / 20) + 1;
      } else {
        imageSpan = Math.ceil(imageHeight / 20);
      }
      setSpan(imageSpan);
    });
  }, []);

  const refImage = useRef(null);

  return (
    <div
      className="image-container"
      style={{ gridRowEnd: `span ${span}`, borderRadius: "10" }}
    >
      <img
        style={{ borderRadius: "10px", border: "3px solid white" }}
        ref={refImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageItem;
