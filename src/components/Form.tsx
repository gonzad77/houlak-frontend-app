/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import { useState } from "react";
import { Input, Flex, Button, ThemeUIStyleObject } from "theme-ui"
import { getAlbumsByArtist } from '../services/spotify';
import { AlbumsContext } from '../context/AlbumsContext';

export const Form = () => {

  const { setAlbums, setArtist } = useContext( AlbumsContext );

  const [artistName, setArtistName] = useState('')

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
  });

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const res = await getAlbumsByArtist(artistName)
      setAlbums(res?.albums);
      setArtist(res?.artistName);
      setStatus({
        submitted: true,
        submitting: false,
      });
      setArtistName('')
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
      });
    }
  }

  return (
    <form onSubmit={subscribe}>
      <Flex sx={subscribeForm}>
        <Input
          id="artist"
          type="text"
          placeholder="Enter the artist name"
          value={artistName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArtistName(e.target.value)}
        />

        <Button sx={{ variant: 'buttons.defaultBtn'}}
          type="submit"
          disabled={status.submitting || artistName.trim() === ''}
          className="subscribe__btn"
          aria-label="Subscribe"
        >
          {!status.submitting
            ? !status.submitted
              ? 'Search'
              : 'Try again'
            : 'Searching...'}
        </Button>
      </Flex>
    </form>
  )
}

const subscribeForm: ThemeUIStyleObject = {
  mt: [6, null, null, 7],
  backgroundColor: ['transparent', 'white'],
  borderRadius: [0, 50],
  overflow: 'hidden',
  p: [0, 1],
  flexDirection: ['column', 'row'],
  '[type="text"]': {
    border: 0,
    borderRadius: 50,
    fontFamily: 'body',
    fontSize: ['14px', null, 2],
    fontWeight: 500,
    color: 'heading',
    py: 1,
    px: [4, null, 6],
    backgroundColor: ['white', 'transparent'],
    height: ['52px', null, '60px'],
    textAlign: ['center', 'left'],
    '&:focus': {
      boxShadow: '0 0 0 0px',
    },
    '::placeholder': {
      color: 'primary',
      opacity: 1,
    },
  },
  '.subscribe__btn': {
    flexShrink: 0,
    ml: [0, 2],
    backgroundColor: ['text', 'primary'],
    mt: [2, 0],
    py: ['15px'],
    '&:disabled': {
      opacity: 0.5,
      cursor: 'default'
    }
  },
}