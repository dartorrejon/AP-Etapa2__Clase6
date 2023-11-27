import { ChakraProvider, Box } from '@chakra-ui/react'
import Formulario from './components/Formulario/Formulario'
import Footer from './components/Footer/Fotter'
import Header from './components/Header/Header'

function App() {
  return (

    <ChakraProvider>
      <Header />
      <Box as="main">
        <Formulario />
      </Box>
      <Footer />
    </ChakraProvider>
  )
}


export default App
