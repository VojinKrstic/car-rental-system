import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      core: {
        vividOrange: "#FF9E0C";
        royalPurple: "#5937E0";
        pureWhite: "#FFFFFF";
        jetBlack: "#000000";
      };
      primary: {
        vividOrange: "#FF9E0C";
        royalPurple: "#5937E0";
        pureWhite: "#FFFFFF";
        jetBlack: "#000000";
      };
    };
    font: {
      family: {
        sansSerif: "'Inter', sans-serif";
        serif: "'Merriweather', serif";
      };
    };
    size: {
      xs: "340px";
      sm: "580px";
      md: "768px";
      lg: "992px";
      xl: "1280px";
    };
    responsive: {
      max: {
        xs: "@media only screen and (max-width: 340px)";
        sm: "@media only screen and (max-width: 580px)";
        md: "@media only screen and (max-width: 768px)";
        lg: "@media only screen and (max-width: 992px)";
        xl: "@media only screen and (max-width: 1280px)";
      };
      min: {
        xs: "@media only screen and (min-width: 340px)";
        sm: "@media only screen and (min-width: 580px)";
        md: "@media only screen and (min-width: 768px)";
        lg: "@media only screen and (min-width: 992px)";
        xl: "@media only screen and (min-width: 1280px)";
      };
    };
  }
}
