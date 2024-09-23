"use client";
import Image from "next/image";
import { useState } from "react";

export default function Thumbnail({ image, index, updateActive }) {
  return (
    <Image
      priority={true}
      src={`/images/${image}`}
      width={88}
      height={88}
      alt="thumbnail-product"
      className={`thumbnail rounded-xl cursor-pointer`}
      onClick={() => updateActive(index)}
    />
  );
}
