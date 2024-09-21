import Image from "next/image";
export default function ProductImage({ url }) {
  return (
    <Image
      src={`/images/${url}`}
      width={445}
      height={445}
      alt="product-image"
      className="rounded-2xl"
    />
  );
}
