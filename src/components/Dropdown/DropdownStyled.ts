import styled from "styled-components";

export const DropdownStyled = styled.div`
  position: relative;
  .dropdown-container {
    width: 285px;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .dropdown-button {
      position: relative;
      width: 100%;
      height: 60px;
      background: ${(props) => props.theme.color.core.pureWhite};
      border: 2px solid rgb(217, 217, 214);
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      padding: 16px 42px 0 16px;
      cursor: pointer;
      .car-name {
        text-align: left;
        text-transform: uppercase;
        font-size: 20px;
      }
    }
    .dropdown-chevron {
      position: absolute;
      top: 20px;
      right: 20px;
      transform: rotate(90deg);
      transition: transform 0.2s ease;
    }
    .open {
      transform: rotate(270deg);
    }
    .dropdown-list {
      position: absolute;
      top: 100%;
      z-index: 100;
      background: ${(props) => props.theme.color.core.pureWhite};
      width: 100%;
      border-radius: 0 0 6px 6px;
      max-height: 236px;
      overflow-y: auto;
      box-shadow: rgba(0, 0, 0, 0.25) 0 0 10px 0;
      .dropdown-option {
        border: 1px solid rgb(217, 217, 214);
        padding: 9px 16px;
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.color.core.pureWhite};
          background: ${(props) => props.theme.color.core.royalPurple};
        }
      }
      .dropdown-option.selected {
        color: ${(props) => props.theme.color.core.pureWhite};
        background: ${(props) => props.theme.color.core.royalPurple};
      }
    }
  }
  .dropdown-label {
    position: absolute;
    top: 20px;
    left: 18px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    transform: translateY(0);
    transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  }
  .dropdown-label.selected {
    font-size: 12px;
    line-height: 14px;
    transform: translateY(-14px);
    font-weight: 700;
    color: rgb(151, 153, 155);
  }
`;
