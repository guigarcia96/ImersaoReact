import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setInputValues = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor, // chave vai ser dinamico de acordo com o valor
    });
  };
  function clearForm() {
    setValues(initialValues);
  }

  const handleChange = (event) => {
    setInputValues(
      event.target.getAttribute('name'),
      event.target.value,
    );
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}
export default useForm;
