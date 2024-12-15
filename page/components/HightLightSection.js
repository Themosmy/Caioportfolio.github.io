import React from "react";

const HighlightSection = () => {
  return (
    <section style={highlightStyles}>
      <img
        src="https://via.placeholder.com/1920x1080"
        alt="Fundo de destaque"
        style={backgroundStyles}
      />
      <div style={contentStyles}>
        <h1>Destaque o Seu Serviço</h1>
        <p>Oferecemos as melhores soluções para você. Conheça mais sobre nossos serviços agora mesmo.</p>
        <a href="#" style={buttonStyles}>
          Saiba Mais
        </a>
      </div>
    </section>
  );
};

const highlightStyles = {
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
};

const backgroundStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
};

const contentStyles = {
  zIndex: 1,
  maxWidth: "800px",
  padding: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
};

const buttonStyles = {
  display: "inline-block",
  padding: "0.8rem 1.5rem",
  background: "#ff5722",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  transition: "background 0.3s ease",
};

export default HighlightSection;
