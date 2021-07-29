import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Flex,
  VStack,
  chakra,
  HStack,
  Button,
  IconButton,
  CloseButton,
  useDisclosure,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'

import { BsFillCameraVideoFill } from 'react-icons/bs'
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar(props) {
  const ref = React.useRef()
  const [y, setY] = React.useState(0)

  // Colors
  const bg = useColorModeValue('white', 'gray.800')

  // icons
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  // Scroll
  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])
  const cl = useColorModeValue('gray.800', 'white')
  const mobileNav = useDisclosure()

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      flexDirection="column"
      display={mobileNav.isOpen ? 'flex' : 'none'}
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        RUTA 1
      </Button>
      <Button w="full" variant="solid" leftIcon={<AiOutlineInbox />}>
        RUTA 2
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        RUTA 3
      </Button>
    </VStack>
  )
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        ref={ref}
        overflowY="hidden"
        transition="box-shadow 0.2s"
        shadow={y > height ? 'sm' : undefined}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <NavLink to="/">
                <HStack>
                  <Heading>LOGO</Heading>
                </HStack>
              </NavLink>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: 'none' }}
                >
                  RUTA 1
                </Button>
                <Button
                  bg={bg}
                  color="gray.500"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: 'none' }}
                >
                  RUTA 2
                </Button>
                <Button
                  bg={bg}
                  color="gray.500"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: 'none' }}
                >
                  RUTA 3
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <Button variant="ghost" size="sm">
                  Ingresar
                </Button>
                <Button variant="solid" size="sm">
                  Registrarse
                </Button>
              </HStack>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  )
}
