import { useState } from "react";

/**
 * El hook personalizado para validar el texto de búsqueda.
 * @returns {Object} objeto con la función de validación y el mensaje de error actual.
 * @returns {Function} validate - función para validar el texto de entrada.
 * @returns {string|null} error - mensaje de error de validación actual.
 */
export const useValidate = () => {
    const [palabra, setPalabra] = useState(null);
    const [error, setError] = useState(null);

    /**
    * Valida el texto de entrada (no vacío, solo letras y espacios).
    * @param {string} palabraValidar - la palabra a validar.
    * @returns {Object} resultado de la validación.
    * @returns {string} error - mensaje de error si la validación falló
    * @returns {string} palabraValidar - palabra validada en minúsculas y sin espacios extra.
    */
    const validate = (palabraValidar) => {
        let message = '';
        const regexp = /^[a-záéíóúÁÉÍÓÚüÜñÑ\s]+$/gi;

        const cleanWord = palabraValidar.trim().toLowerCase();

        if (cleanWord.length === 0) {
            message = 'No se ha introducido ninguna palabra.';
        } else if (!regexp.test(cleanWord)) {
            message = 'La palabra no es valida';
        }
        if (message) {
            setError(message);
            setPalabra(null);
        } else {
            setError(null);
            setPalabra(palabraValidar);
        }
    }

    return {
        validate,
        palabra,
        error
    }
}
