import { useEffect, useState } from 'react';
import { getCatImage } from '../services/getCatImage';

interface dataProp {
  url: string;
}

export const useCatImage = ({ fact }: { fact: string }) => {
  const [catImageUrl, setCatImageUrl] = useState('');

  const firstWord = (fact: string) => {
    return fact?.split(' ')[0];
  };

  useEffect(() => {
    if (!fact) return;
    getCatImage().then((data: dataProp[]) => {
      const url = data[0].url;
      setCatImageUrl(url);
    });
  }, [fact]);

  return { catImageUrl };
};
