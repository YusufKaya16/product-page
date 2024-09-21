import Image from "next/image";

export default function Thumbnail({
  url,
  index,
  updateActive,
  myRef,
  activeClass,
}) {
  return (
    <Image
      ref={myRef}
      src={`/images/${url}`}
      width={88}
      height={88}
      alt="thumbnail-product"
      className={`rounded-xl cursor-pointer ${activeClass}`}
      onClick={() => updateActive(index)}
    />
  );
}
