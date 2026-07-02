import React from "react";
import { Container } from "react-bootstrap";

const PaginationUI = () => {
  const btn = {
    width: "40px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0 4px",
  };

  return (
    <Container>
    <div style={{
      display: "flex",
      alignItems: "center",
      marginTop: "30px",
      marginBottom: "100px",
    }}>

      {/* LEFT DOUBLE ARROW */}
      <div style={{
        ...btn,
        backgroundColor: "#EAF4FF",
        color: "#0B0B5C",
      }}>
        «
      </div>

      {/* PAGE 1 (ACTIVE) */}
      <div style={{
        ...btn,
        backgroundColor: "#0B0B5C",
        color: "#fff",
      }}>
        1
      </div>

      {/* PAGE 2 */}
      <div style={{
        ...btn,
        backgroundColor: "#EAF4FF",
        color: "#0B0B5C",
      }}>
        2
      </div>

      {/* PAGE 3 */}
      <div style={{
        ...btn,
        backgroundColor: "#EAF4FF",
        color: "#0B0B5C",
      }}>
        3
      </div>

      {/* DOTS */}
      <div style={{
        ...btn,
        backgroundColor: "transparent",
        color: "#0B0B5C",
        cursor: "default",
      }}>
        …
      </div>

      {/* RIGHT DOUBLE ARROW */}
      <div style={{
        ...btn,
        backgroundColor: "#EAF4FF",
        color: "#0B0B5C",
      }}>
        »
      </div>

    </div>
    </Container>
  );
};

export default PaginationUI;
