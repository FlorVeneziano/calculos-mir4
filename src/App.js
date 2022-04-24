import React from 'react';
import './App.css';
import CardTotal from './componentes/CardTotal';
import { cantidadDeItemsEpicos, cantidadDeItemsRaros, cantidadDeMaterialEpicos, cantidadDeMaterialRaros, total, totalFinal, totalSinFormato, formatoMexico } from './utils/index.js'
// F3F4ED color para las cards <3
function App() {
  const [state300, setState300] = React.useState({
    raro: 0,
    epico: 0,
  })
  const [state100, setState100] = React.useState({
    raro: 0,
    epico: 0,
  })
  const [state100dos, setState100dos] = React.useState({
    raro: 0,
    epico: 0,
  })

  //300
  let epicosFaltantes300 = cantidadDeItemsEpicos(300, state300.epico);
  let rarosFaltantes300 = cantidadDeItemsRaros(epicosFaltantes300, state300.raro);
  let cantidadMaterialEpico300 = cantidadDeMaterialEpicos(epicosFaltantes300);
  let cantidadMaterialRaro300 = cantidadDeMaterialRaros(rarosFaltantes300);
  let total300 = total(cantidadMaterialEpico300, cantidadMaterialRaro300)
  let total300final = totalSinFormato(cantidadMaterialEpico300, cantidadMaterialRaro300)


  // 100
  let epicosFaltantes100 = cantidadDeItemsEpicos(100, state100.epico);
  let rarosFaltantes100 = cantidadDeItemsRaros(epicosFaltantes100, state100.raro);
  let cantidadMaterialEpico100 = cantidadDeMaterialEpicos(epicosFaltantes100);
  let cantidadMaterialRaro100 = cantidadDeMaterialRaros(rarosFaltantes100);
  let total100 = total(cantidadMaterialEpico100, cantidadMaterialRaro100)
  let total100final = totalSinFormato(cantidadMaterialEpico100, cantidadMaterialRaro100)

  //100 DOS
  let epicosFaltantes100dos = cantidadDeItemsEpicos(100, state100dos.epico);
  let rarosFaltantes100dos = cantidadDeItemsRaros(epicosFaltantes100dos, state100dos.raro);
  let cantidadMaterialEpico100dos = cantidadDeMaterialEpicos(epicosFaltantes100dos);
  let cantidadMaterialRaro100dos = cantidadDeMaterialRaros(rarosFaltantes100dos);
  let total100dos = total(cantidadMaterialEpico100dos, cantidadMaterialRaro100dos)
  let total100dosfinal = totalSinFormato(cantidadMaterialEpico100dos, cantidadMaterialRaro100dos)

  let finalTotal = totalFinal(total300final, total100final, total100dosfinal)

  const handleChange300 = (e) => {
    setState300({
      ...state300,
      [e.target.name]: e.target.value
    })
  }
  const handleChange100 = (e) => {
    setState100({
      ...state100,
      [e.target.name]: e.target.value
    })
  }
  const handleChange100dos = (e) => {
    setState100dos({
      ...state100dos,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div class="container" style={{ marginTop: '1rem' }}>
      <h1 style={{ textAlign: "center", marginBottom: '2rem' }}> Acero / Platino</h1>
      <div class="row">

        <div class="col-4" id='card'>
          <h3 style={{ position: 'relative', left: '4rem' }}>Refinado a Raro</h3>
          <div className="card" style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange300} name='raro' style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {rarosFaltantes300}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label > <b>Acero: </b> {" "} {formatoMexico(cantidadMaterialRaro300.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialRaro300.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b>{" "}{formatoMexico(cantidadMaterialRaro300.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '6rem' }}>Raro a Epico</h3>
          <div className="card" style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange300} name='epico' style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {epicosFaltantes300}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label><b>Acero: </b> {" "} {formatoMexico(cantidadMaterialEpico300.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialEpico300.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b> {" "}{formatoMexico(cantidadMaterialEpico300.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '10rem' }}>Total</h3>
          <CardTotal total={total300} />
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginBottom: '2rem' }}>Orbe maligno/ Fragmento iluminador/ Quintaesencia </h1>
      <div class="row">

        <div class="col-4" id='card'>
          <h3 style={{ position: 'relative', left: '4rem' }}>Refinado a Raro</h3>
          <div className="card" name='raro' style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange100} name='raro' style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {rarosFaltantes100}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label><b>Acero: </b> {" "} {formatoMexico(cantidadMaterialRaro100.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialRaro100.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b> {" "}{formatoMexico(cantidadMaterialRaro100.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '6rem' }}>Raro a Epico</h3>
          <div className="card" style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange100} name="epico" style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {epicosFaltantes100}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label><b>Acero: </b> {" "} {formatoMexico(cantidadMaterialEpico100.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialEpico100.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b> {" "}{formatoMexico(cantidadMaterialEpico100.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '10rem' }}>Total</h3>
          <CardTotal total={total100} />
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginBottom: '2rem' }}>Piedra de sombra lunar/ Piedra de ánima/ Baratija de exorcismo</h1>
      <div class="row">

        <div class="col-4" id='card'>
          <h3 style={{ position: 'relative', left: '4rem' }}>Refinado a Raro</h3>
          <div className="card" style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange100dos} name="raro" style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {rarosFaltantes100dos}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label><b>Acero: </b> {" "} {formatoMexico(cantidadMaterialRaro100dos.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialRaro100dos.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b> {" "}{formatoMexico(cantidadMaterialRaro100dos.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '6rem' }}>Raro a Epico</h3>
          <div className="card" style={{ margin: "1rem" }}>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontWeight: "600" }}>
                Tengo: <input onChange={handleChange100dos} name="epico" style={{ maxWidth: "3rem", margin: "1rem" }} /> Faltan: {' '}
                {epicosFaltantes100dos}
              </label>
              <div
                style={{
                  border: "0.05px solid #064663",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0, 1rem, 0, rem",
                  textAlign: "center",
                }}
              >
                <label><b>Acero: </b> {" "} {formatoMexico(cantidadMaterialEpico100dos.acero)}</label>
                <br></br>
                <label> <b>Cobre:</b> {" "}  {formatoMexico(cantidadMaterialEpico100dos.cobre)}</label>
                <br></br>
                <label><b>Polvo:</b> {" "}{formatoMexico(cantidadMaterialEpico100dos.polvo)}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h3 style={{ position: 'relative', left: '10rem' }}>Total</h3>
          <CardTotal total={total100dos} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 >Total Final</h3>
        <CardTotal id='cardFinal' total={finalTotal} />
      </div>
    </div>
  );
}

export default App;
