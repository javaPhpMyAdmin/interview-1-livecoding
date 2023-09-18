const CAT_ENDPOINT_IMAGE = `https://api.thecatapi.com/v1/images/search`;

const CAT_API_KEY = import.meta.env.VITE_CATS_API_KEY;

export const getCatImage = async () => {
  return fetch(CAT_ENDPOINT_IMAGE, {
    headers: {
      'x-api-key': CAT_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
