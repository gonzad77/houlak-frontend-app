import { Box, ThemeUIStyleObject, Heading, Text} from "theme-ui"
import { Form } from "./Form";

export const Search = () => {
    
  return (
    <Box sx={contentBox}>
      <Box sx={contentBoxInner}>
        <Heading as="h2" sx={title}>
          Search artist albums
        </Heading>
        <Text as="p" sx={description}>
          Are you looking for your favourite artist albums? Search them here!
        </Text>
        <Form />
      </Box>
    </Box>
  )
}

const contentBox: ThemeUIStyleObject = {
  backgroundColor: 'primary',
  textAlign: 'center',
  borderRadius: 10,
  py: ['60px', null, 8],
}

const contentBoxInner: ThemeUIStyleObject = {
  width: ['100%', null, '540px', '600px'],
  mx: 'auto',
  mt: -1,
  px: [3, 5],
}

const title: ThemeUIStyleObject = {
  fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
  color: 'white',
  lineHeight: [1.3, null, null, 1.25],
  fontWeight: '700',
  letterSpacing: ['-.5px', null, '-1.5px'],
  mb: [2, 3],
}

const description: ThemeUIStyleObject = {
  fontSize: ['15px', 2, null, null, null, '17px', null, 3],
  color: 'white',
  lineHeight: [1.85, null, null, 2],
  px: [0, null, 5],
}