export const useForm = (palabra) => {
    const regexp = /^[a-záéíóúÁÉÍÓÚüÜñÑ\s]+$/gi;
    if (!regexp.test(palabra)) {
      return {
        ok:false,
        error:'La palabra no es valida',
        value:palabra
      }
    } else {
      console.log(palabra, 'palabra está válida, useForm')
      return {
        ok:true,
        error:null,
        value:palabra
      };
    }

}


