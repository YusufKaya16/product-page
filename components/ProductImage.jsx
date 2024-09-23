import Image from "next/image";
export default function ProductImage({ url }) {
  return (
    <Image
      src={`/images/${url}`}
      width={445}
      height={445}
      alt="product-image"
      className="product-image rounded-2xl cursor-pointer"
    />
  );
}
