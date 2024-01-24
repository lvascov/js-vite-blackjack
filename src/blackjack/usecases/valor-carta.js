

/**
 * Obtener el valor de la carta
 * @param {string} carta es la carta que se tomo del deck
 * @returns {number} el valor para las cartas especiales
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}