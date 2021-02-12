import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.api_url,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const api = {
  categories: async () => {
    return await instance.post('/auth/login', body);
  },
  breeds: async () => {
    return await instance.post('/auth/login', body);
  },
  subBreeds: async ({ breed }) => {
    return await instance.get(`categories/breeds/${breed}/subs`);
  }
};
