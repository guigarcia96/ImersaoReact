import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriasRepository.getCategoriesWithVideos()
      .then((response) => {
        setInitialData(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription="Lorem Ipsum bla bla bla"
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel

        ignoreFirstVideo

        category={dadosIniciais.categorias[0]}

      />

      <Carousel

        category={dadosIniciais.categorias[1]}

      />

      <Carousel

        category={dadosIniciais.categorias[2]}

      />

      <Carousel

        category={dadosIniciais.categorias[3]}

      />

      <Carousel

        category={dadosIniciais.categorias[4]}

      />

      <Carousel

        category={dadosIniciais.categorias[5]}

      /> */}

    </PageDefault>
  );
}

export default Home;
