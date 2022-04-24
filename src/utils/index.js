const aceroEpico = 5000
const cobreEpico = 20000
const polvoEpico = 25
const aceroRaro = 1000
const cobreRaro = 2000
const polvoRaro = 2


export const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp, rep);
}

export function cantidadDeItemsEpicos(constante, epicos) {
    let epicosFaltantes = constante - epicos

    return epicosFaltantes
}
export function cantidadDeItemsRaros(epicosFaltantes, raros) {
    let rarosFaltantes = epicosFaltantes * 10 - raros

    return rarosFaltantes
}

export function cantidadDeMaterialEpicos(epicosFaltantes) {
    let materialesEpicos = {
        acero: epicosFaltantes * aceroEpico,
        cobre: epicosFaltantes * cobreEpico,
        polvo: epicosFaltantes * polvoEpico,
    }

    return materialesEpicos
}
export function cantidadDeMaterialRaros(rarosFaltantes) {
    let materialesRaros = {
        acero: rarosFaltantes * aceroRaro,
        cobre: rarosFaltantes * cobreRaro,
        polvo: rarosFaltantes * polvoRaro,
    }

    return materialesRaros
}

export function total(cantidadDeMaterialEpicos, cantidadDeMaterialRaros) {
    let materialesTotales = {
        acero: formatoMexico(cantidadDeMaterialEpicos.acero + cantidadDeMaterialRaros.acero),
        cobre: formatoMexico(cantidadDeMaterialEpicos.cobre + cantidadDeMaterialRaros.cobre),
        polvo: formatoMexico(cantidadDeMaterialEpicos.polvo + cantidadDeMaterialRaros.polvo),
    }
    return materialesTotales
}
export function totalSinFormato(cantidadDeMaterialEpicos, cantidadDeMaterialRaros) {
    let materialesTotales = {
        acero: cantidadDeMaterialEpicos.acero + cantidadDeMaterialRaros.acero,
        cobre: cantidadDeMaterialEpicos.cobre + cantidadDeMaterialRaros.cobre,
        polvo: cantidadDeMaterialEpicos.polvo + cantidadDeMaterialRaros.polvo,
    }
    return materialesTotales
}

export function totalFinal(total300, total100, total100dos) {
    let materialesTotales = {
        acero: formatoMexico(total300.acero + total100.acero + total100dos.acero),
        cobre: formatoMexico(total300.cobre + total100.cobre + total100dos.cobre),
        polvo: formatoMexico(total300.polvo + total100.polvo + total100dos.polvo),
    }

    return materialesTotales
}