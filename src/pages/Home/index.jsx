import React from 'react'

// Terceros
import { Container, Image, SimpleGrid, Wrap } from '@chakra-ui/react'

// components
import Hero from '../../components/Hero'
import Cotizador from '../../components/Cotizador'

// Images
import BENZ_LOGO from '../../assets/images/benz.png'
import LAMBO_LOGO from '../../assets/images/lambo.png'
import SUBARU_LOGO from '../../assets/images/subaru.png'
import FERRARI_LOGO from '../../assets/images/ferrari.png'

const Home = () => {
  return (
    <Container
      py={3}
      w="90%"
      maxH="100vh"
      maxW="1200px"
      margin="0 auto"
      h="calc(100vh - 200px)"
    >
      <SimpleGrid
        h="full"
        alignItems="center"
        justifyContent="center"
        transform="translateY(-20px)"
        templateColumns={{ md: '1fr 350px' }}
      >
        <Hero />
        <Cotizador />
      </SimpleGrid>
      <Wrap w="full" spacing={10} justify="center">
        <Image
          w={44}
          opacity="0.2"
          src={BENZ_LOGO}
          alt="Benz logo"
          filter="grayscale(100%)"
        />
        <Image
          w={44}
          opacity="0.2"
          alt="Benz logo"
          src={LAMBO_LOGO}
          filter="grayscale(100%)"
        />
        <Image
          w={44}
          opacity="0.2"
          alt="Benz logo"
          src={SUBARU_LOGO}
          filter="grayscale(100%)"
        />
        <Image
          w={44}
          opacity="0.2"
          alt="Benz logo"
          src={FERRARI_LOGO}
          filter="grayscale(100%)"
        />
        <Image
          w={44}
          opacity="0.2"
          src={BENZ_LOGO}
          alt="Benz logo"
          filter="grayscale(100%)"
        />
      </Wrap>
    </Container>
  )
}

export default Home
