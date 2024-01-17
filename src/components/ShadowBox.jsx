import { Box } from "@chakra-ui/react"

const innerBoxStyles = {
    color: 'white',
    boxShadow: '0 0 20px #00000031',
    
  }
  export default function ShadowBox({children, style}) {
  return (
    <Box bg='#3ca094' {...style} p="6" boxShadow='xl'  sx={innerBoxStyles}  borderRadius={10}  backdropBlur='8px'>{children}</Box>
  )
}
// pt={10} pb={10}
// borderRadius={20}