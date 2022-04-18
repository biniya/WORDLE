import { common } from './words';

export const getRandomWord = () => {
    return common[Math.floor(Math.random() * common.length)];
  };