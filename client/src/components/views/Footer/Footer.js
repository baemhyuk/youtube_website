import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        <span role="img" aria-label="donut">
          🍩
        </span>
        BMH
        <span role="img" aria-label="donut">
          🍩
        </span>
      </p>
    </div>
  );
}

export default Footer;
