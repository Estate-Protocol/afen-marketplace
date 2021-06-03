import React from "react";
import Image from "next/image";

export interface ListAvatarProps {
  image?: string;
  imageAlt?: string;
}

export default function ListAvatar({ image, imageAlt }: ListAvatarProps) {
  return (
    <div className="w-12 h-10 relative overflow-hidden rounded-full">
      <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        }
        layout="fill"
        objectFit="none"
        alt={imageAlt}
      ></Image>
    </div>
  );
}
