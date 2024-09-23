"use client";
import Navbar from "@/components/Navbar";
import ProductImage from "@/components/ProductImage";
import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import CounterButton from "./CounterButton";
import ProductItem from "./ProductItem";

import { ToastMessage, sendMessage } from "@/helpers/ToastMessage";
import LightBox from "./LightBox";
import ThumbnailList from "./ThumbnailList";

const images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const thumbnailUrls = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

export default function ProductCard() {
  // the count is amount number.
  const [count, setCount] = useState(0);
  // product list in the basket.
  const [productList, setProductList] = useState([]);
  // thumbnail
  const thumbnailRefs = useRef([]);
  const [activeThumb, setActiveThumb] = useState(0);
  // product image
  const [image, setImage] = useState(images[activeThumb]);
  // lightbox
  const [lightBox, setLightBox] = useState(false);

  const addToRefArray = (el) => {
    if (el && !thumbnailRefs.current.includes(el)) {
      thumbnailRefs.current.push(el);
    }
  };

  // counter button handle
  const handleClick = (state) => {
    if (state === "plus") {
      setCount((oldCount) => oldCount + 1);
    }
    if (state === "minus" && count > 0) {
      setCount((oldCount) => oldCount - 1);
    }
  };

  // add product to the cart or basket
  const addToCart = () => {
    if (count === 0) return sendMessage("Ürün adeti Giriniz", "warn");

    for (let i = 0; i < count; ++i) {
      setProductList((oldList) => {
        return [...oldList, <ProductItem />];
      });
    }
  };

  // change product image
  useEffect(() => {
    const updateImage = () => {
      if (thumbnailRefs.current[activeThumb]) {
        console.log(thumbnailRefs.current[activeThumb]);
        setImage(images[activeThumb]);
      }
    };

    updateImage();
  }, [activeThumb]);

  // change image with button on the mobile design
  const changeImage = (e) => {
    const { ariaLabel } = e.target;
    if (ariaLabel === "previous" && activeThumb > 0) {
      setActiveThumb((oldIndex) => oldIndex - 1);
    }
    if (ariaLabel === "next" && activeThumb < images.length - 1) {
      setActiveThumb((oldIndex) => oldIndex + 1);
    }
  };

  const updateActive = (index) => {
    setActiveThumb(index);
  };

  const openLightBox = () => {
    setLightBox(!lightBox);
  };

  return (
    <section className="main-box">
      {/* navbar start */}
      <Navbar productList={productList} />
      {/* navbar finish */}

      {/* line start */}
      <div className="line mt-8 border border-black opacity-15"></div>
      {/* line finish */}

      <main className="product mt-20 mx-12">
        <div className="product-card sm:flex sm:flex-col sm:gap-24 lg:flex-row lg:gap-32">
          <div className="basis-1/2 flex flex-col sm:items-center md:items-center gap-8">
            <ProductImage
              image={image}
              changeImage={changeImage}
              activeThumb={activeThumb}
              images={images}
              openLightBox={openLightBox}
            />
            <ThumbnailList
              addToRefArray={addToRefArray}
              thumbnailUrls={thumbnailUrls}
              updateActive={updateActive}
            />
          </div>
          <div className="product-info basis-1/2 flex justify-center items-center">
            <div>
              <p className="company-text mb-6">SNEKARS COMPANY</p>
              <h1 className="product-title mb-8">
                Fall Limited Edition Sneakers
              </h1>
              <p className="info-text mb-6">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <span className="flex flex-row items-center justify-between  md:flex-col md:items-start gap-2.5 mb-6">
                <div className="flex items-center gap-2.5 ">
                  <span className="price">$125.00</span>
                  <span className="bg-black text-white px-2 rounded-md">
                    50%
                  </span>
                </div>
                <p
                  className="discountless line-through"
                  style={{ color: "#69707D" }}
                >
                  $250.00
                </p>
              </span>
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className="count-container flex justify-between px-3"
                  style={{ background: "#F6F8FD" }}
                >
                  <CounterButton state="minus" handleClick={handleClick} />
                  <span className="count-text flex justify-center items-center">
                    {count}
                  </span>
                  <CounterButton state="plus" handleClick={handleClick} />
                </div>
                <button
                  className="addToCartBtn flex justify-center items-center gap-3 rounded-xl"
                  style={{ background: "var(--btn-bg-color)" }}
                  onClick={addToCart}
                >
                  <Image
                    src={"/images/icon-cart.svg"}
                    alt="sepet"
                    width={20}
                    height={20}
                    priority={true}
                  />
                  <span className="font-bold">Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LightBox
        image={image}
        changeImage={changeImage}
        activeThumb={activeThumb}
        images={images}
        updateActive={updateActive}
        thumbnailUrls={thumbnailUrls}
        addToRefArray={addToRefArray}
        lightBox={lightBox}
        openLightBox={openLightBox}
      />
    </section>
  );
}
