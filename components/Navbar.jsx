"use client";
import "../components/navbarCSS.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

const links = [
  { id: 0, href: "/", text: "Collections" },
  { id: 1, href: "/", text: "Men" },
  { id: 2, href: "/", text: "Women" },
  { id: 3, href: "/", text: "Contact" },
];

export default function Navbar({ productList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [overlayState, setOverlayState] = useState(false);
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

  const closeSidebar = () => {
    setOverlayState(false);
  };

  return (
    <div>
      <nav className="navbar-container w-full">
        <div className="navbar h-full flex items-center justify-between">
          <div className="navbar-inner flex gap-10">
            <button className="hamburger" onClick={() => setOverlayState(true)}>
              <Image
                src={"/images/icon-menu.svg"}
                width={16}
                height={16}
                alt="hamburger-icon"
                priority={true}
                className="hamburger pointer-events-none"
              />
            </button>
            <Link href="/" className="navbar-brand font-extrabold">
              <Image
                src={"/images/logo.svg"}
                width={137.5}
                height={20}
                alt="logo"
                priority={true}
              />
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
                style={{
                  left: `${sliderPosition}px`,
                  width: `${sliderWidth}px`,
                }}
              ></div>
            </ul>
          </div>
          <div className="image-container flex items-center gap-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cart-button relative"
            >
              <Image
                src={"/images/icon-cart.svg"}
                alt="sepet"
                width={20}
                height={20}
                priority={true}
              />
              {productList.length !== 0 && (
                <span
                  className="basket-icon rounded-full inline-block px-2"
                  style={{ background: "var(--btn-bg-color)" }}
                >
                  {productList.length}
                </span>
              )}
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
            <Cart isOpen={isOpen} productList={productList} />
          </div>
        </div>
      </nav>
      <Sidebar
        overlayState={overlayState}
        closeSidebar={closeSidebar}
        links={links}
        navLinkRefs={navLinkRefs}
      />
    </div>
  );
}
