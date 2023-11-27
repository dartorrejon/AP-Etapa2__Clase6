import { ChakraProvider, Box } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import Formulario from './components/Formulario/Formulario'

function App() {
  return (

    <ChakraProvider>
      <Box as="main">
        <Formulario/>
      </Box>

    </ChakraProvider>
  )
}


export default App
