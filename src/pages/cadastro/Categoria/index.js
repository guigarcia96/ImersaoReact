import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);

  const {
    handleChange, values, clearForm,
  } = useForm(initialValues);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gmflix.herokuapp.com/categorias/';
    fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          value={values.titulo}
          onChange={handleChange}
          name="titulo"
          type="text"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <Button as="button" type="submit">
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>

      )}
      <ul>
        {
          categorias.map((categoria, index) => {
            const indexValue = `${categoria}-${index}`;
            return (

              <li key={indexValue}>
                {categoria.titulo}
              </li>
            );
          })
        }
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
};
export default CadastroCategoria;
