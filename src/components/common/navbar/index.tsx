"use client";
import navlinks from "../navlinks/Navlinks";
import { StyledNav, StyledNavLink } from "./NavBar.styled";

const NavbarComponent = () => {

  return (
    <header>

      <StyledNav>
        <img src="/bosun-logo.png" style={{ height: "4rem", cursor: "pointer" }} />
        <div style={{ display: "flex", gap: "25px" }}>

          {navlinks.map((item) => {
            const { title, location } = item;
            return (
              <StyledNavLink
                href={location}
                key={title}
                onClick={() => {
                  return;
                }
                }
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
