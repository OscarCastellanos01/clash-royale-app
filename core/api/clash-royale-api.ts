import axios from 'axios';

export const clashRoyaleApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_CR_DB_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_CR_DB_TOKEN}`
  }
});