import React from 'react'

// Terceros
import { Flex, Button, Image, Text } from '@chakra-ui/react'

// images
import BENZ from '../../assets/images/benz.png'

const AutopartCard = ({ Mfr_Name: content, City, Country }) => {
  return (
    <Flex
      w="full"
      bg="gray.700"
      px={2}
      pb={2}
      rounded="lg"
      minH="320px"
      flexDir="column"
    >
      <Image w="full" mt={5} src={BENZ} />
      <Text mt={5} fontWeight="bold" letterSpacing="tight">
        {content}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {City} &bull; {Country}
      </Text>
      <Button mt="auto" colorScheme="whatsapp">
        Contactar Proveedor
      </Button>
    </Flex>
  )
}

export default AutopartCard
