"use client";

import navlinks from "./navlinks/Navlinks";
import { StyledNav, StyledNavLink } from "./Navbar.styled";
import { useRouter } from "next/navigation";
import Image from "next/image";
function NavbarComponent() {
	const router = useRouter();
	return (
		<header style={{ position: "fixed", width: "100%", zIndex: "100", backgroundColor: "white", borderBottom: "2px solid #ececec" }}>
			<StyledNav>
				<Image
					src="/bosun.png"
					height={25}
					width={100}
					style={{ cursor: "pointer" }}
					onClick={() => {
						router.push("/");
					}}
					alt="logo"
				/>
				<div style={{ display: "flex", gap: "25px" }}>
					{navlinks.map((item) => {
						const { title, location } = item;
						return (
							<StyledNavLink href={location} key={title}>
								{title}
							</StyledNavLink>
						);
					})}
				</div>
			</StyledNav>
		</header>
	);
}

export default NavbarComponent;
