import { albumsResponse } from '../interfaces/albumResponse';
import { Image, Box, Heading, Text, Flex, ThemeUIStyleObject } from 'theme-ui';

export const AlbumCard = ({
  id,
  name,
  image_url,
  release_date,
  total_tracks,
}: albumsResponse) => {
  return (
    <Box sx={card}>
      <Box sx={thumbnail}>
        <Image src={image_url} alt={'Album Image'} />
      </Box>

      <Flex sx={albumContent}>
        <Heading sx={title}>
          {name}
        </Heading>

        <Flex sx={footer}>
          <Text sx={footerName}>{release_date}</Text>
          <Text sx={footerDate}>{total_tracks} Tracks</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

const card: ThemeUIStyleObject = {
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(38,78,118,0.12)',
  borderRadius: '7px',
  m: ['0 5px 35px', null, null, '0 15px 40px'],
  transition: 'all 0.3s',
  '&:hover': {
    boxShadow: '0px 5px 20px rgba(38,78,118,0.15)',
  },
}

const thumbnail: ThemeUIStyleObject = {
  borderRadius: '7px 7px 0 0',
  overflow: 'hidden',
  display: 'flex',
  img: {
    width: '100%',
  }
}
 
const albumContent: ThemeUIStyleObject = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: ['15px 5px', '25px 30px'],
}

const title: ThemeUIStyleObject = {
  fontSize: [1, null, null, null, null, 4],
  color: 'heading',
  lineHeight: [1.4, 1.5],
  fontWeight: 700,
  mb: [3, 4, 5],
  pr: [0, null, null, null, 5],
}

const footer: ThemeUIStyleObject = {
  width: '100%',
  justifyContent: 'space-between',
  alignItem: 'center',
}

const footerName: ThemeUIStyleObject = {
  fontSize: ['14px', null, 2],
  fontWeight: 500,
  color: 'primary',
  lineHeight: 1.4,
}

const footerDate: ThemeUIStyleObject= {
  fontSize: ['14px', null, 2],
  fontWeight: 400,
  lineHeight: 1.5
}
