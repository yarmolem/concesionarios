import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Terceros
import { Box, Flex, Stack, Select, Button, Heading } from '@chakra-ui/react'

const Cotizador = () => {
  // history
  const router = useHistory()

  // form
  const [form, setForm] = useState({
    marca: '',
    modelo: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = () => {
    if (form.marca === '' && form.modelo === '') return
    router.push('/buscador', { ...form })
  }

  const isDisabled = form.marca === '' || form.modelo === ''

  return (
    <Box>
      <Heading
        mb={6}
        textAlign="center"
        lineHeight="shorter"
        letterSpacing="tight"
        fontWeight="extrabold"
        fontSize={{ base: '3xl', sm: '4xl' }}
      >
        ¡Comencemos!
      </Heading>

      <Stack mb={5}>
        <Flex>
          <Heading mr={5}>1.</Heading>
          <Select
            required
            size="lg"
            name="marca"
            variant="flushed"
            fontWeight="bold"
            value={form.marca}
            onChange={handleChange}
            placeholder="Selecciona una marca"
          >
            <option value="Mercedes Benz">Mercedes Benz</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Subaru">Subaru</option>
          </Select>
        </Flex>
        <Flex>
          <Heading mr={5}>2.</Heading>
          <Select
            required
            size="lg"
            name="modelo"
            variant="flushed"
            fontWeight="bold"
            value={form.modelo}
            onChange={handleChange}
            placeholder="Selecciona un modelo"
          >
            <option value="Modelo 1">Modelo 1</option>
            <option value="Modelo 2">Modelo 2</option>
            <option value="Modelo 3">Modelo 3</option>
            <option value="Modelo 4">Modelo 4</option>
          </Select>
        </Flex>
      </Stack>

      <Button
        w="full"
        size="lg"
        fontWeight="bold"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        Buscar
      </Button>
    </Box>
  )
}

export default Cotizador
