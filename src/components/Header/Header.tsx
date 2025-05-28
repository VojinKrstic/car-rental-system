"use client";

import Image from "next/image";
import { HeaderStyled } from "./HeaderStyled";
import Menu from "../Menu/Menu";
import { CAR_ICON, PHONE_ICON } from "@/assets/images";
import { useMediaQuery } from "react-responsive";
import theme from "@/theme/theme";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: theme.size.lg });
  return (
    <HeaderStyled>
      {isDesktop && (
        <div className="phone-container">
          <Image src={PHONE_ICON} width={40} height={40} alt="phone-icon" />
          <div>
            <p>Need help?</p>
            <p>+996 247-1680</p>
          </div>
        </div>
      )}
      <Menu />
      <div className="title-container">
        <Image src={CAR_ICON} alt="Car icon" width={30} height={30} />
        <span className="title">Car Rental</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
