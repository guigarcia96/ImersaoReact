import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

const CadastroCategoria = () => {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();
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

  function handleSubmit(event) {
    event.preventDefault();
    const categoriaUpperCase = categorias.map((categoria) => {
      let categoriaUpper = categoria.titulo.toUpperCase();
      categoriaUpper = categoriaUpper.replace(/\s/g, '');
      return categoriaUpper;
    });

    let valueUpper = values.titulo.toUpperCase();
    valueUpper = valueUpper.replace(/\s/g, '');

    if (categoriaUpperCase.includes(valueUpper)) {
      alert('Categoria já existente');
      clearForm();
    } else {
      setCategorias([
        ...categorias,
        values,
      ]);
      categoriesRepository.create({
        titulo: values.titulo,
        cor: values.cor,

      });
      clearForm();
      history.push('/cadastro/video');
    }
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

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

        <Button as={Link} to="/">
          Ir para Home
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>

      )}
      {/* <ul>
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
      </ul> */}

    </PageDefault>
  );
};
export default CadastroCategoria;
