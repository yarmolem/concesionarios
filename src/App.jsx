import React from 'react'

// Terceros
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Router
import RootRouter from './routers/RootRouter'

// theme
import theme from './theme'

const App = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router>
        <RootRouter />
      </Router>
    </ChakraProvider>
  )
}

export default App
