import React, { useEffect, useState } from 'react'
import {
  Box,
  Icon,
  Flex,
  Image,
  chakra,
  Button,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { IoLogoWhatsapp } from 'react-icons/io'
import { InView } from 'react-intersection-observer'

const Card = ({ num }) => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    return () => setLoad(false)
  }, [])

  return (
    <Box
      maxW="xs"
      mx="auto"
      shadow="lg"
      rounded="lg"
      as={InView}
      onChange={(v) => setLoad(v)}
      bg={useColorModeValue('white', 'gray.900')}
    >
      {
        /* eslint-disable */
        load ? (
          <>
            <Box px={4} py={2}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color={useColorModeValue('gray.800', 'white')}
                textTransform="uppercase"
              >
                Proveedor #{num}
              </chakra.h1>
              <chakra.p
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos quidem sequi illum facere recusandae voluptatibus
              </chakra.p>
            </Box>

            <Image
              h={48}
              w="full"
              fit="cover"
              mt={2}
              src="https://sedes.divemotor.com/img/sedes/molina01.jpg"
              alt="concesionario Mercedes-Benz"
            />

            <Flex
              alignItems="center"
              justifyContent="space-between"
              px={2}
              py={2}
              bg="gray.900"
              roundedBottom="lg"
            >
              <Button size="lg" w="full" mr={2} colorScheme="telegram">
                Contactar
              </Button>
              <IconButton
                size="lg"
                colorScheme="whatsapp"
                icon={<Icon as={IoLogoWhatsapp} />}
              />
            </Flex>
          </>
        ) : null
      }
    </Box>
  )
}

export default Card
