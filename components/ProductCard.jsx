"use client";
import Navbar from "@/components/Navbar";
import ProductImage from "@/components/ProductImage";
import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const thumbnailUrls = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

export default function ProductCard() {
  const [active, setActive] = useState(0);
  const [add, setAdd] = useState(null);
  const thumbnailRefs = useRef([]);

  const updateActive = (index) => {
    setActive(index);
  };

  useEffect(() => {
    console.log(thumbnailRefs.current[active]);
    if (thumbnailRefs.current[active]) {
      setAdd("active-thumbnail");
    }
  }, [active]);

  return (
    <section>
      <Navbar />
      <div className="line mt-8 border border-black opacity-15"></div>
      <main className="product mt-20 mx-12">
        <div className="product-card flex border border-blue-700">
          <div className="basis-1/2 flex flex-col gap-8 border border-red-700">
            <ProductImage url="image-product-1.jpg" />
            <ul className="thumbnail-list flex gap-8">
              {thumbnailUrls.map((url, index) => (
                <li key={index}>
                  <Thumbnail
                    index={index}
                    url={`${url}`}
                    activeClass={add}
                    updateActive={updateActive}
                    myRef={(el) => (thumbnailRefs.current[index] = el)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-1/2 border border-red-700">
            <div>
              <p>SNEKARS COMPANY</p>
              <h1 className="font-extrabold">Fall Limited Edition Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <span className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <span className="font-bold">$125.00</span>
                  <span className="bg-black text-white px-2 rounded-md">
                    50%
                  </span>
                </div>
                <p className="font-bold" style={{ color: "#69707D" }}>
                  $250.00
                </p>
              </span>
              <div className="flex gap-4">
                <div className="count-container">
                  <button>
                    <Image
                      src={"/images/icon-minus.svg"}
                      width={12}
                      height={3.33}
                      priority={true}
                      alt="minus-icon"
                    />
                  </button>
                  <span>0</span>
                  <button>
                    <Image
                      src={"/images/icon-plus.svg"}
                      width={12}
                      height={3.33}
                      priority={true}
                      alt="minus-icon"
                    />
                  </button>
                </div>
                <button className="addToCartBtn flex justify-center items-center border border-red-700">
                  {" "}
                  <Image
                    src={"/images/icon-cart.svg"}
                    alt="sepet"
                    width={20}
                    height={20}
                    priority={true}
                  />{" "}
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
