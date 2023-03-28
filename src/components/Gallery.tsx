/** @jsxImportSource theme-ui */
import { useContext } from "react";
import { Box, Grid, Heading, ThemeUIStyleObject } from "theme-ui"
import { AlbumsContext } from "../context/AlbumsContext";
import { AlbumCard } from "./AlbumCard";

export const Gallery = () => {

  const { albums, artist } = useContext( AlbumsContext );

  return (
    <Box sx={containerBox}>
      <Heading as="h2" sx={title}>
        albums of: { artist }
      </Heading>
      <Grid sx={albumGrid}>
        {albums.map( ({id, name, image_url, release_date, total_tracks}) => (
          <AlbumCard 
            key={id} 
            id={id} 
            name={name} 
            image_url={image_url} 
            release_date={release_date} 
            total_tracks={total_tracks}
          />
        ))}
      </Grid>
    </Box>
  )
}

const containerBox: ThemeUIStyleObject = {
  py: ['60px', null, 8]
}

const title: ThemeUIStyleObject = {
  fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
  textTransform: 'uppercase',
  textAlign: 'center',
  color: 'primary',
  lineHeight: [1.3, null, null, 1.25],
  fontWeight: '700',
  letterSpacing: ['-.5px', null, '-1.5px'],
  mb: [3, 5, 7],
}

const albumGrid: ThemeUIStyleObject = {
  mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
}
