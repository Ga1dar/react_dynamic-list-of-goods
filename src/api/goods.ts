import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json();
};

export function getAll(): Promise<Good[]> {
  return request<Good[]>(API_URL);
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5); // sort and get the first 5
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(g => g.color === 'red');
};
