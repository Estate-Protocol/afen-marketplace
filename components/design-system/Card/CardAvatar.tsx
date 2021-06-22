import React from "react";
import Image from "next/image";

export interface CardAvatarProps {
  image?: string;
  imageAlt?: string;
  verified?: boolean;
}

export default function CardAvatar({ image, imageAlt }: CardAvatarProps) {
  return (
    <div className="w-4 h-4 relative overflow-hidden rounded-full mr-1">
      <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        }
        layout="fill"
        objectFit="cover"
        alt={imageAlt}
      ></Image>
    </div>
  );
}
