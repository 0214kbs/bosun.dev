"use client";
import Navbar from "@/components/common/navbar";
import StyledComponentsRegistry from "./lib/registry";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/DefaultTheme";
import Footer from "@/components/common/footer";
import metadata from "@/data/metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <head>
        <title>{metadata.title}</title>
        <meta content={metadata.description} name="description" />
        <meta property="og:site_name" content={metadata.author} />
      </head>
      <ThemeProvider theme={theme}>
        <body>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
