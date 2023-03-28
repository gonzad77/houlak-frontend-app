import { useState } from "react"
import { AlbumsContext } from "./AlbumsContext"
import { albumsResponse } from '../interfaces/albumResponse';

type Props = {
  children?: React.ReactNode
};

export const AlbumsProvider = ({ children }: Props) => {

    const initAlbums: albumsResponse[] = [];
    const initArtist: string = '';
    const [albums, setAlbums] = useState(initAlbums);
    const [artist, setArtist] = useState(initArtist);

    return (
        <AlbumsContext.Provider value={{ albums, setAlbums, artist, setArtist }}>
            { children }
        </AlbumsContext.Provider>
    )
}