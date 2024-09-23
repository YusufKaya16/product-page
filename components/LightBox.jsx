import Image from "next/image";
import ProductImage from "./ProductImage";
import Thumbnail from "./Thumbnail";
import ThumbnailList from "./ThumbnailList";

export default function LightBox({
  image,
  changeImage,
  activeThumb,
  images,
  thumbnailUrls,
  addToRefArray,
  updateActive,
  lightBox,
  openLightBox,
}) {
  return (
    <section
      className="lightbox-overlay"
      style={{ display: lightBox ? "flex" : "" }}
    >
      <main>
        <div className="flex justify-end">
          <button className="m-3">
            <Image
              src={"/images/icon-close.svg"}
              width={20}
              height={20}
              alt="close-icon"
              priority={true}
              onClick={openLightBox}
            />
          </button>
        </div>
        <div className="image-wrapper flex flex-col gap-10">
          <ProductImage
            image={image}
            changeImage={changeImage}
            activeThumb={activeThumb}
            images={images}
          />
          <ThumbnailList
            thumbnailUrls={thumbnailUrls}
            addToRefArray={addToRefArray}
            updateActive={updateActive}
          />
        </div>
      </main>
    </section>
  );
}
