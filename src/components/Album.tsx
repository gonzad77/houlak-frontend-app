import { useEffect, useState, useContext } from "react";
import { Container, ThemeUIStyleObject} from "theme-ui"
import { AlbumsContext } from "../context/AlbumsContext";
import { urlResponse } from "../interfaces/urlResponse";
import { silentAuthentication } from "../services/spotify";
import { Gallery } from "./Gallery";
import { Search } from "./Search";

export const Album = () => {

  const [authenticated, setAuthenticated] = useState(false)
  const { albums } = useContext( AlbumsContext );


  useEffect( () => {
    silentAuthentication().then((res: urlResponse) => {
      if (res.url) {
        window.location.href = res.url;
      } 
      setAuthenticated(true);
    }).catch(e => {
      setAuthenticated(false);
    })
  }, [])
  
  
  return (
    <>
      <Container sx={container}>
        {
          authenticated ? <Search /> : 'Error! Try again later, we are working in the solution!'
        }
        {
          albums?.length ? <Gallery></Gallery> : <></>
        }
      </Container>  
    </>
  )
}

const container: ThemeUIStyleObject = {
  mt: '100px',
	mb: ['40px', null, 8, null, null, 10],
}