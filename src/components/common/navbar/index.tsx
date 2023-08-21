"use client";
import navlinks from "./navlinks/Navlinks";
import { StyledNav, StyledNavLink } from "./NavBar.styled";

const NavbarComponent = () => {

  return (
    <header>
      <StyledNav>
        <img src="/bosun.png" style={{ height: "1.6rem", cursor: "pointer" }} />
        <div style={{ display: "flex", gap: "25px" }}>

          {navlinks.map((item) => {
            const { title, location } = item;
            return (
              <StyledNavLink
                href={location}
                key={title}
              >
                {title}
              </StyledNavLink>
            );
          })}
        </div>
      </StyledNav>
    </header>
  );
};

export default NavbarComponent;
