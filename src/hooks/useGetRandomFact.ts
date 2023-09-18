import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/getRandomFact';

export const useGetRandomFact = () => {
  const [fact, setFact] = useState<string>('');

  const getMoreRandomFact = () => {
    getRandomFact().then((data: string) => setFact(data));
  };

  useEffect(() => {
    getRandomFact().then((data: string) => {
      setFact(data);
    });
  }, []);

  return { fact, getMoreRandomFact };
};
