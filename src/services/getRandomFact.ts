const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { fact } = data;
      return fact;
    });
};
