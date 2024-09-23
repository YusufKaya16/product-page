"use client";
import Image from "next/image";
import { useState } from "react";

export default function Thumbnail({
  url,
  index,
  updateActive,
  myRef,
  activeClass,
}) {
  return (
    <Image
      priority={true}
      ref={myRef}
      src={`/images/${url}`}
      width={88}
      height={88}
      alt="thumbnail-product"
      className={`thumbnail rounded-xl cursor-pointer ${activeClass}`}
      onClick={() => updateActive(index)}
    />
  );
}
