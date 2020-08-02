import configs from '../config/index';

const CATEGORIES_URL = `${configs.URL_BACKEND}/categorias?`;

function getCategoriesWithVideos() {
  return fetch(`${CATEGORIES_URL}_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getCategoriesWithVideos,
};
