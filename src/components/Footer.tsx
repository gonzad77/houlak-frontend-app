/** @jsxImportSource theme-ui */
import { Box, Container, Text, ThemeUIStyleObject } from "theme-ui"

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Box sx={footerBottomArea}>
          <Text sx={copyright}>
            Copyright {new Date().getFullYear()}  Gonzalo Di Giovanni
          </Text>
        </Box>
      </Container>
    </footer>
  )
}

const footerBottomArea: ThemeUIStyleObject = {
  borderTop: '1px solid',
  borderTopColor: 'border_color',
  pt: [7, null, 8],
  pb: ['40px', null, '100px'],
  textAlign: 'center',
}

const copyright: ThemeUIStyleObject = {
  fontSize: [1, '15px'],
  width: '100%'
}