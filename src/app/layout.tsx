"use client";

import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import GlobalStyle from "./globalStyle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
