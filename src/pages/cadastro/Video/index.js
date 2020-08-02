import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriesTittle = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository.getAllCategories().then((response) => {
      setCategorias(response);
    });
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        clearForm(values);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={onSubmitHandler}>
        <FormField
          name="titulo"
          label="Título"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          name="url"
          label="URL"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          name="categoria"
          label="Categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriesTittle}
        />

        <Button as="button" type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
