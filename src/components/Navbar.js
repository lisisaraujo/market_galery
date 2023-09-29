import React from "react";
import Link from "next/link";

export default function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white",
    color: "white",
    padding: "10px 0",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "gray",
    margin: "0 10px",
    fontSize: "20px",
  };

  return (
    <div style={navbarStyle}>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>
            <Link href="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/favorites" style={linkStyle}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
