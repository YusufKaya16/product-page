import Image from "next/image";
export default function ProductImage({
  image,
  changeImage,
  activeThumb,
  images,
  openLightBox
}) {
  return (
    <div className="image-wrapper">
      {activeThumb !== 0 && (
        <button
          className="previous-btn"
          onClick={changeImage}
          aria-label="previous"
        >
          <Image
            className="pointer-events-none"
            src={"/images/icon-previous.svg"}
            width={40}
            height={40}
            alt="previous-button"
            priority={true}
          />
        </button>
      )}
      <Image
        src={`/images/${image}`}
        width={445}
        height={445}
        alt="product-image"
        className="product-image rounded-2xl cursor-pointer"
        onClick={openLightBox}
      />
      {activeThumb !== images.length - 1 && (
        <button className="next-btn" onClick={changeImage} aria-label="next">
          <Image
            className="pointer-events-none"
            src={"/images/icon-next.svg"}
            width={40}
            height={40}
            alt="next-button"
            priority={true}
          />
        </button>
      )}
    </div>
  );
}
