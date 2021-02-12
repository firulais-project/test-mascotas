import { useState } from 'react';
import {
  Center,
  Tabs,
  Container,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Button,
  Stack,
  Collapse,
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  Box,
  SimpleGrid
} from '@chakra-ui/react';
import Form from '../components/Form';

const quetions = [
  {
    name: 'name',
    title: 'como es la casa donde vives?',
    options: [
      { label: 'Casa pequeña o Apartamento' },
      { label: 'Casa con terraza' },
      { label: 'Casa con jardín' }
    ]
  },
  {
    name: 'othe',
    title: 'Cuantas horas estas fuera de casa',
    options: [
      { label: 'Menos de 5 horas' },
      { label: 'Mas de 5 horas' },
    ]
  },
  {
    name: 'sadsad',
    title: '¿Qué te gusta hacer en tu tiempo libre?',
    options: [
      { label: 'Soy hogareño y disfruto de la tranquilidad' },
      { label: 'Me gusta disfrutar de la comprañia de mi familia' },
      { label: 'Me encanta el deporte y las actividades al aire libre' }
    ]
  },
  {
    name: 'sadqdwsad',
    title: '¿Con quién compartes tu hogar?',
    options: [
      { label: 'Con mi familia' },
      { label: 'Vivo solo/a' },
      { label: 'Con mi pareja' }
    ]
  },
  {
    name: 'qsdwwwqd',
    title: '¿Por qué te gustaría tener un perro?',
    options: [
      { label: 'Por la compañia' },
      { label: 'Para que proteja mi casa' },
      { label: 'Para entrenar con el' },
      { label: 'Para salir a pasear' }
    ]
  },
  {
    name: '213qsdwwwqd',
    title: '¿Cualidades de tu perro ideal?',
    options: [
      { label: 'Por la compañia' },
      { label: 'Para que proteja mi casa' },
      { label: 'Para entrenar con el' },
      { label: 'Para salir a pasear' }
    ]
  }
]

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleIndex = index => setIndex(index);

  return (
    <div maxW="lg" centerContent>
      <Tabs index={index} variant="soft-rounded">
        <Center>
          <TabList>
            {quetions.map((_, index) => (
              <Tab key={`tab-index-${index}`} isDisabled>{index + 1}</Tab>
            ))}
          </TabList>
        </Center>
        <TabPanels>
          { quetions.map(quetion => (
              <TabPanel key={`quietion-key-${quetion.name}`}>
                <Form
                  name={quetion.name}
                  title={quetion.title}
                  options={quetion.options}
                />
              </TabPanel>
            ))
          }
        </TabPanels>

        <Container>
          <Collapse in={index >= quetions.length - 1}>
            <Stack spacing={4}>
              <Button
                color="white"
                colorScheme="green"
                type="submit"
                width="100%"
                onClick={() => handleIndex(index - 1)}
              >
                Buscar
              </Button>
            </Stack>
          </Collapse>

          <Collapse in={index < quetions.length - 1}>
            <Stack direction="row" spacing={4}>
              <Button
                color="white"
                colorScheme="red"
                width="100%"
                isDisabled={index <= 0}
                onClick={() => handleIndex(index - 1)}
              >
                anterior
              </Button>
              <Button
                color="white"
                colorScheme="blue"
                width="100%"
                isDisabled={index >= quetions.length - 1}
                onClick={() => handleIndex(index + 1)}
              >
                proxima
              </Button>
            </Stack>
          </Collapse>
        </Container>
      </Tabs>
      <Divider mt="10" />
      <Center>
        <Heading mt="25">Resultados</Heading>
      </Center>
      <Divider mt="10" />

      <SimpleGrid
        columns={4}
        spacing={4}
      >
        {quetions.map((_, index) => (
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
              key={index}
            >
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  Nombre de la raza
                </LinkOverlay>
              </Heading>
              <Text mb="3">
                description corta xD
              </Text>
              <Box as="a" color="teal.400" href="#" fontWeight="bold">
                Abrir modal
              </Box>
            </LinkBox>
          ))
        }
      </SimpleGrid>
    </div>
  );
}
