import React from "react";
import Image from "next/image";

export interface ListAvatarProps {
  image?: string;
  imageAlt?: string;
}

export default function ListAvatar({ image, imageAlt }: ListAvatarProps) {
  return (
    <div className="mr-1">
      <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        }
        width="45"
        height="45"
        layout="fixed"
        objectFit="fill"
        className="rounded-full"
        alt={imageAlt}
      ></Image>
    </div>
  );
}
