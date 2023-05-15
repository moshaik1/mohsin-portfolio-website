import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  // let navItems = ["Home", "Experiences", "About", "Contact"];
  // let navLinks = ["/", "/experiences", "/about", "/contact"];

  // let links = navItems.map((item, index) => {
  //   return (
  //     <li key={item}>
  //       <Link to={navLinks[index]}> {item} </Link>
  //     </li>
  //   );
  // });

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Mohsin Portfolio
      </Link>
      <ul>
        <CustomLink to="/home"> // Home</CustomLink>
        <CustomLink to="/experiences"> // Experience</CustomLink>
        <CustomLink to="/about"> // About</CustomLink>
        <CustomLink to="/contact"> // Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
