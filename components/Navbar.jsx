"use client";
import "../components/navbarCSS.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";

const links = [
  { id: 0, href: "/", text: "Collections" },
  { id: 1, href: "/", text: "Men" },
  { id: 2, href: "/", text: "Women" },
  { id: 3, href: "/", text: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const navLinkRefs = useRef([]);

  useEffect(() => {
    const updateSliderPosition = () => {
      if (navLinkRefs.current[activeLink]) {
        const { offsetLeft, offsetWidth } = navLinkRefs.current[activeLink];
        setSliderPosition(offsetLeft);
        setSliderWidth(offsetWidth);
      }
    };
    updateSliderPosition();
  }, [activeLink]);

  return (
    <nav className="navbar-container w-full">
      <div className="navbar h-full flex items-center justify-between">
        <div className="flex gap-10">
          <Link href="/" className="navbar-brand font-extrabold">
            Sneakers
          </Link>
          <ul className="navbar-link-list flex gap-8 relative">
            {links.map((link, index) => (
              <li key={link.id}>
                <Link
                  ref={(el) => (navLinkRefs.current[index] = el)}
                  onClick={() => setActiveLink(index)}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <div
              className="active-bar"
              style={{ left: `${sliderPosition}px`, width: `${sliderWidth}px` }}
            ></div>
          </ul>
        </div>
        <div className="image-container flex items-center gap-12">
          <button onClick={() => setIsOpen(!isOpen)} className="cart-button">
            <Image
              src={"/images/icon-cart.svg"}
              alt="sepet"
              width={20}
              height={20}
              priority={true}
            />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="avatar-button rounded-full overflow-hidden"
          >
            <Image
              src={"/images/image-avatar.png"}
              alt="avatar"
              width={50}
              height={50}
              priority={true}
            />
          </button>
          <Cart isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
}
