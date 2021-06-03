import React from "react";
import Image from "next/image";

interface CardMediaProps {
  src: string;
  alt?: string;
}

export default function CardMedia({ src, alt }: CardMediaProps) {
  return (
    <div>
      <Image src={src} layout="fill" objectFit="none" alt={alt}></Image>
    </div>
  );
}
