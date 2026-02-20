"use client";
import menu_data from "@/data/MenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// 1. Define the interface for the props
interface MobileMenuProps {
  setOffCanvas: (offCanvas: boolean) => void;
}
const MobileMenu = ({ setOffCanvas }: MobileMenuProps) => {
  const currentRoute = usePathname();
  const [navTitle, setNavTitle] = useState("");

  const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
  const isSubMenuItemActive = (subMenuLink: string) =>
    currentRoute === subMenuLink;

  const openMobileMenu = (menu: any) => {
    setNavTitle((prev: any) => (prev === menu ? "" : menu));
  };

  const closeSidebar = () => setOffCanvas(false);

  return (
    <>
      <ul>
        {menu_data.map((menu) =>
          menu.mega_munu ? (
            <li key={menu.id} className="has-megamenu">
              <Link href={menu.link} onClick={closeSidebar}>
                {menu.title}
              </Link>
              <ul
                className="sub-menu mega-menu menu-image"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                <li>
                  {menu.mega_munu.map((item) => (
                    <div key={item.id} className="image text-center">
                      <Image src={item.img} alt="image" />
                      <div className="btn__group">
                        <Link
                          href={item.btn_link1}
                          className="btn-one"
                          onClick={closeSidebar}
                        >
                          {item.btn_1}
                        </Link>
                        {item.btn_link2 && (
                          <Link
                            href={item.btn_link2}
                            className="btn-one mt-2"
                            onClick={closeSidebar}
                          >
                            {item.btn_2}
                          </Link>
                        )}
                      </div>
                      <h6 className="text-white">{item.title}</h6>
                    </div>
                  ))}
                </li>
              </ul>
              <a
                className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                onClick={() => openMobileMenu(menu.title)}
                style={{ cursor: "pointer", fontSize: "18px" }}
              >
                {navTitle === menu.title ? "-" : "+"}
              </a>
            </li>
          ) : (
            <li key={menu.id}>
              {/* Added closeSidebar to standard Top Level Links */}
              <Link
                href={menu.link}
                onClick={closeSidebar}
                className={`${isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link))) ? "active" : ""}`}
              >
                {menu.title}
              </Link>

              {menu.has_dropdown && menu.sub_menus && (
                <ul
                  className="sub-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menus.map((sub_m, i) => (
                    <li key={i}>
                      {/* Added closeSidebar to Sub Menu Links */}
                      <Link
                        href={sub_m.link}
                        onClick={closeSidebar}
                        className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}
                      >
                        {sub_m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {menu.sub_menus && (
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ cursor: "pointer", fontSize: "18px" }}
                >
                  {navTitle === menu.title ? "-" : "+"}
                </a>
              )}
            </li>
          ),
        )}
      </ul>
    </>
  );
};

export default MobileMenu;
