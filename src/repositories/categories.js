import configs from '../config/index';

const CATEGORIES_URL = `${configs.URL_BACKEND}/categorias?`;

function create(objetoDoVideo) {
  return fetch(`${CATEGORIES_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function getCategoriesWithVideos() {
  return fetch(`${CATEGORIES_URL}_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function getAllCategories() {
  return fetch(`${CATEGORIES_URL}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getCategoriesWithVideos,
  getAllCategories,
  create,
};
