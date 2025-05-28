"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

import { MenuStyled } from "./MenuStyled";
import theme from "@/theme/theme";
import { CLOSE_ICON_BLACK, HAMBURGER_MENU_ICON } from "@/assets/images";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Details", href: "/details" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const Menu = () => {
  const isDesktop = useMediaQuery({ minWidth: theme.size.lg });
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <MenuStyled showMenu={showMenu}>
      {!isDesktop && (
        <Fragment>
          <Image
            className="hamburger-icon"
            src={showMenu ? CLOSE_ICON_BLACK : HAMBURGER_MENU_ICON}
            alt="Hamburger icon"
            width={24}
            height={24}
            onClick={toggleMenu}
          />
        </Fragment>
      )}
      <div className="menu-items">
        {menuItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`link ${activePage === href ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </MenuStyled>
  );
};

export default Menu;
