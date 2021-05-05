import React from "react";
import Image from "next/image";

export default function CardMedia({ src, alt }) {
  return (
    <div>
      <Image
        src={src}
        layout="fill"
        objectFit="none"
        alt={alt}
      ></Image>
    </div>
  );
}
