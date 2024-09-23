import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Sidebar({
  overlayState,
  closeSidebar,
  links,
  navLinkRefs,
}) {
  return (
    <div
      className={` ${overlayState ? "openOverlay" : ""}`}
      onClick={(e) => {
        console.log(e);
        if (e.target.className === "overlay") return closeSidebar();
      }}
    >
      <aside className="overlay">
        <section className="sidebar-wrapper">
          <button className="close-btn" onClick={closeSidebar}>
            <Image
              src={"/images/icon-close.svg"}
              width={14}
              height={14}
              alt="close-btn"
              priority={true}
              className="m-7"
            />
          </button>
          <ul className="sidebar-link-list mt-6">
            {links.map((link) => (
              <li className="ms-6 mb-5 font-bold text-lg" key={link.id}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
