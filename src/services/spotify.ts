import axios, { AxiosError } from "axios";

const baseURL = "http://localhost:8000/api"

export const silentAuthentication = async () => {
  try {
    const response = await axios.get(`${baseURL}/auth`);
    return response.data
  } catch (error) {
   throw new Error ((error instanceof AxiosError) ? error.message : 'Error authenticating, try again later.');
  }
}

export const getAlbumsByArtist = async (artist: string) => {
  try {
    const response = await axios.get(`${baseURL}/albums?artist=${artist}`);
    return response.data
  } catch (error) {
    throw new Error ((error instanceof AxiosError) ? error.message : 'Error getting albums, try again later.');

  }
}
