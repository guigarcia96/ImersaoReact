import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const CadastroCategoria = () => {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(initialValues);

  const setInputValues = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor, // chave vai ser dinamico de acordo com o valor
    });
  };

  const handleChange = (event) => {
    const { target } = event;
    setInputValues(
      target.getAttribute('name'),
      target.value,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(initialValues);
  };

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url)
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

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          name="nome"
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

        <Button>
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
                {categoria.nome}
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
