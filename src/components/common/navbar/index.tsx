"use client";

import navlinks from "./navlinks/Navlinks";
import { StyledNav, StyledNavLink } from "./Navbar.styled";
import { useRouter } from "next/navigation";

function NavbarComponent() {
	const router = useRouter();
	return (
		<header style={{ position: "fixed", width: "100%", zIndex: "100", backgroundColor: "white" }}>
			<StyledNav>
				<img
					src="/bosun.png"
					style={{ height: "1.6rem", cursor: "pointer" }}
					onClick={() => {
						router.push("/");
					}}
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
