"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import "../styles/globals.css";
import theme from "../styles/DefaultTheme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
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
