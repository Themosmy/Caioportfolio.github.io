import { link } from "fs";
import React from "react";

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1>Minha Página</h1>
            <nav>
                {["Home","Sobre","Portfólio","Contato"].map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} style={linkStyles}>
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    );
};

const headerStyles = {
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
  marginLeft: "1rem",
};

export default Header;
