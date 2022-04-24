import React from "react";

function Card(state, setState) {
  return (
    <div className="card" style={{ margin: "1rem" }}>
      <div
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          Tengo: <input style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan:
          XXX
        </label>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            padding: "0, 1rem, 0, rem",
          }}
        >
          <label>Acero: xxx</label>
          <br></br>
          <label>Cobre: xxx</label>
          <br></br>
          <label>Polvo: xxx</label>
        </div>
      </div>
    </div>
  );
}

export default Card;
