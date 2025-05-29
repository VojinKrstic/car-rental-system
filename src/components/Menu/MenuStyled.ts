import styled from "styled-components";
import { RIGHT_ARROW } from "@/assets/images";

interface MenuProps {
  $showMenu: boolean;
}

export const MenuStyled = styled.div<MenuProps>`
  .hamburger-icon {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .menu-items {
    display: ${(props) => (props.$showMenu ? "flex" : "none")};
    position: absolute;
    z-index: 9999;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    border-top: 3px solid ${(props) => props.theme.color.core.royalPurple};
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 5px;
      border-bottom: 2px solid ${(props) => props.theme.color.core.royalPurple};
      text-transform: uppercase;
      font-weight: 800;
      &::after {
        background: url(${RIGHT_ARROW.src});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        content: "";
        width: 16px;
        height: 16px;
      }
    }
  }

  ${(props) => props.theme.responsive.min.lg} {
    .menu-items {
      display: flex;
      flex-direction: row;
      position: static;
      border: 0;
      padding: 0;
      gap: 32px;
      .link {
        align-items: flex-start;
        height: 58px;
        font-weight: 500;
        border: 0;
        padding: 0;
        text-transform: none;
        font-size: 18px;
        &::after {
          display: none;
        }
      }
      .active {
        border-bottom: 8px solid
          ${(props) => props.theme.color.core.royalPurple};
      }
    }
  }
`;
