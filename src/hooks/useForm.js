import { useState } from "react";

export const useForm = () => {
  
  const [error, setError]=useState(null);
  
  const regexp = /^[a-záéíóúÁÉÍÓÚüÜñÑ\s]+$/gi;
  
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


