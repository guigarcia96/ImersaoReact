import configs from '../config/index';

const VIDEOS_URL = `${configs.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
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

export default {
  create,
};
