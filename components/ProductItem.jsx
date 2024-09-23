import Image from "next/image";

export default function ProductItem() {
  return (
    <section className="product flex gap-5">
      <main className="flex gap-4">
        <Image
          src={"/images/image-product-1-thumbnail.jpg"}
          width={50}
          height={50}
          alt="product-item-image"
          priority={true}
          className="rounded-sm pointer-events-none"
        />
        <div className="flex flex-col">
          <span>Fall Limited Edition Sneakers</span>
          <span>
            $125.00 x 3 <span className="font-bold">$375.00</span>
          </span>
        </div>
      </main>
      <button>
        <Image
          src={"/images/icon-delete.svg"}
          width={14}
          height={16}
          alt="delete-icon"
        />
      </button>
    </section>
  );
}
