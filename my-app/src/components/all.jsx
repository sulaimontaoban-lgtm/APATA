import React, { useState } from "react";
import video from "../images/video.png"

const All = () => {
  const [active, setActive] = useState("All");

  const buttonStyle = (name) => ({
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor:  "#E32213" ,
    color: active === name ? "#fff" : "#000",
    border: active === name ? "none" : "1px solid #ddd",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    color: "white"
  });
  const buttonStyl = (name) => ({
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: active === name ? "blue" : "#fff",
    color: active === name ? "#fff" : "#000",
    border: active === name ? "none" : "1px solid #ddd",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  });

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "15px",
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <div style={wrapperStyle}>
      {/* ROW 1 */}
      <div style={rowStyle}>
        <button style={buttonStyle("All")} onClick={() => setActive("All")}>
          All
        </button>
        <button
          style={buttonStyl("Inter-House Sports")}
          onClick={() => setActive("Inter-House Sports")}
        >
          Inter-House Sports
        </button>
        <button
          style={buttonStyl("Christmas Festival")}
          onClick={() => setActive("Christmas Festival")}
        >
          Christmas Festival
        </button>
        <button
          style={buttonStyl("Cultural Day")}
          onClick={() => setActive("Cultural Day")}
        >
          Cultural Day
        </button>
        <button
          style={buttonStyl("Fathers Day")}
          onClick={() => setActive("Fathers Day")}
        >
          Fathers Day
        </button>
        <button
          style={buttonStyl("Mothers Day")}
          onClick={() => setActive("Mothers Day")}
        >
          Mothers Day
        </button>
      </div>

      {/* ROW 2 */}
      <div style={rowStyle}>
        <button
          style={buttonStyl("Valentine Day")}
          onClick={() => setActive("Valentine Day")}
        >
          Valentine Day
        </button>
        <button
          style={buttonStyl("Graduation Ceremony")}
          onClick={() => setActive("Graduation Ceremony")}
        >
          Graduation Ceremony
        </button>
        <button
          style={buttonStyl("Independence Day")}
          onClick={() => setActive("Independence Day")}
        >
          Independence Day
        </button>
      </div>
     
    </div>
  );
};

export default All;
