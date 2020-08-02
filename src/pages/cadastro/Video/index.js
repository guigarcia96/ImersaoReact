import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();

  const { handleChange, values, clearForm } = useForm({
    titulo: 'Título Padrão',
    url: 'https://www.youtube.com/watch?v=xbo9GVmv87Y',
    categoria: 'Front',
  });

  function onSubmitHandler(event) {
    event.preventDefault();

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: 1,
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
