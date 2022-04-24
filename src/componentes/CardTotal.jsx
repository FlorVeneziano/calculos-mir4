import React from "react";

function CardTotal({ total }) {
  return (
    <div className="card" id="total" style={{ margin: "1rem" }}>
      <div style={{ margin: "1rem" }}>
        <label style={{ margin: "1rem", fontWeight: "bolder" }}>Total:</label>
        <div
          style={{
            border: "0.05px solid #064663",
            display: "flex",
            flexDirection: "column",
            padding: "0, 1rem, 0, rem",
            textAlign: "center",
          }}
        >
          <label>
            <b>Acero:</b> {total.acero}
          </label>
          <br></br>
          <label>
            <b>Cobre:</b> {total.cobre}
          </label>
          <br></br>
          <label>
            <b>Polvo:</b> {total.polvo}
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardTotal;
