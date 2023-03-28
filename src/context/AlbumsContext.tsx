import { createContext, Dispatch, SetStateAction } from 'react';
import { albumsResponse } from '../interfaces/albumResponse';

type AlbumsContextProps = {
  albums: albumsResponse[],
  artist: string,
  setAlbums: Dispatch<SetStateAction<albumsResponse[]>>
  setArtist: Dispatch<SetStateAction<string>>
}

export const AlbumsContext = createContext<AlbumsContextProps>({} as AlbumsContextProps);