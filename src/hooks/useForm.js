import { useState } from "react";

/**
 * El hook personalizado para validar el texto de búsqueda.
 * @returns {Object} objeto con la función de validación y el mensaje de error actual.
 * @returns {Function} validate - función para validar el texto de entrada.
 * @returns {string|null} error - mensaje de error de validación actual.
 */
export const useForm = () => {
  
  const [error, setError]=useState(null);
  
  const regexp = /^[a-záéíóúÁÉÍÓÚüÜñÑ\s]+$/gi;
  
  /**
   * Valida el texto de entrada (no vacío, solo letras y espacios).
   * @param {string} word - la palabra a validar.
   * @returns {Object} resultado de la validación.
   * @returns {boolean} ok - indica si la palabra es válida.
   * @returns {string} error - mensaje de error si la validación falló
   * @returns {string} result - palabra validada en minúsculas y sin espacios extra.
   */
  const validate = (word) => {
      const cleanWord = word.trim().toLowerCase();
      let message = '';

      if (!cleanWord) {
        message = 'No se ha introducido ninguna palabra.';
      } else if (!regexp.test(cleanWord)) {
          message = 'La palabra no es valida';
      }
      if (message) {
        setError(message);
        return {
          ok: false,
          error: message
        }
      }

      setError(null);
      return {
        ok: true,
        result: cleanWord
      }
  };
  return {validate, error}
}


