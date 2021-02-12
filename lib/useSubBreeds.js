import { useState, useEffect } from 'react';
import { api } from '../lib/api';

export const useSubBreeds = () => {
  const [isLoading, setLoading] = useState(true);
  const [subBreeds, setSubBreeds] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.subBreeds({
        breed: process.env.breed
      });

      setSubBreeds(data.data);
      setLoading(false);
    } catch(err) {
      console.log(err);
    }
  }, []);

  return { isLoading, subBreeds };
}