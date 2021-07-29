import React from 'react'
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Button
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Flex w="full" alignItems="center" justifyContent="flex-start">
      <Box bg={useColorModeValue(null, 'gray.800')}>
        <SimpleGrid
          maxW="lg"
          alignItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx="auto"
          display={{ lg: 'flex' }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color={useColorModeValue('gray.900', 'gray.100')}
              mb={6}
            >
              <chakra.span display="block">A partir de ahora</chakra.span>
              <chakra.span
                display="block"
                color={useColorModeValue('brand.600', 'gray.500')}
              >
                tendrás acceso a todas las tiendas de repuestos del Perú.
              </chakra.span>
            </chakra.h2>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={2}>
              <Box display="inline-flex" rounded="md" shadow="md">
                <Button
                  w="full"
                  minW="125px"
                  size="lg"
                  fontWeight="bold"
                  colorScheme="telegram"
                >
                  Iniciar
                </Button>
              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <Button
                  w="full"
                  minW="125px"
                  size="lg"
                  variant="outline"
                  fontWeight="bold"
                  colorScheme="telegram"
                >
                  Leer más
                </Button>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
