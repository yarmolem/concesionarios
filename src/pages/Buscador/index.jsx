import React, { useState } from 'react'

// Terceros
import {
  Select,
  Button,
  Container,
  Box,
  Input,
  SimpleGrid,
  Heading,
  Center,
  chakra,
  Stack
} from '@chakra-ui/react'
import Card from '../../components/Card'
import useCarBrands from '../../hooks/useCarBrands'
import useCarProviders from '../../hooks/useCarProviders'

const Buscador = ({ location }) => {
  const { marca = '', modelo = '' } = location.state
  // form
  const [form, setForm] = useState({ marca, modelo, year: '' })

  // Fetch
  const { listMarcas } = useCarBrands()
  const { data, nroItems, getProvider } = useCarProviders()

  const handleChange = ({ target: { name, value } }) => {
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = () => {
    if (form.marca === '') return
    getProvider(form.marca)
  }

  const isDisabled = form.marca === '' || form.modelo === ''

  return (
    <Container maxW="1300px">
      <SimpleGrid
        p={2}
        mt={10}
        gap={2}
        justifyContent="center"
        templateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(auto-fit, minmax(300px, 350px)) 150px'
        }}
      >
        <Box w="full">
          <Input
            size="lg"
            name="marca"
            list="marcas"
            value={form.marca}
            onChange={handleChange}
          />

          <datalist id="marcas">
            <option>Subaru</option>
            <option>Ferrari</option>
            <option>Mercedes Benz</option>
            <option>Lamborghini</option>
            {listMarcas.map(({ Make_ID: id, Make_Name: name }) => (
              <option key={id}>{name}</option>
            ))}
          </datalist>
        </Box>

        <Select
          required
          size="lg"
          name="modelo"
          variant="filled"
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
        <Select
          required
          size="lg"
          name="modelo"
          variant="filled"
          fontWeight="bold"
          value={form.modelo}
          onChange={handleChange}
          placeholder="Selecciona el año"
        >
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </Select>

        <Button
          size="lg"
          minW="150"
          disabled={isDisabled}
          colorScheme="telegram"
          onClick={handleSubmit}
        >
          Buscar
        </Button>
      </SimpleGrid>

      <Heading fontSize={{ base: 'xl', xl: '2xl' }}>
        {nroItems} Proveedores encontrados
      </Heading>

      {data.length !== 0 && (
        <SimpleGrid
          mt={5}
          gap={2}
          justifyContent="center"
          templateColumns="repeat(auto-fit, 300px)"
        >
          {data.map((prov) => (
            <Card key={prov.Mfr_ID} num={prov.Mfr_ID} />
          ))}
        </SimpleGrid>
      )}

      {data.length === 0 && (
        <Center h="50vh">
          <chakra.h2
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.100"
            mb={6}
          >
            <chakra.span display="block"> No hay Resultados </chakra.span>
          </chakra.h2>
        </Center>
      )}
    </Container>
  )
}

export default Buscador
