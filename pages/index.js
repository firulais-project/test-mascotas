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
import BreedDetails from '../components/BreedDetails';
import { useSubBreeds } from '../lib/useSubBreeds';
import { questions } from '../data/questions';
import LazyLoad from 'react-lazyload';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isPreview, setPreview] = useState(false);
  const [selected, setSelected] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [wasFilter, setWasFilter] = useState(false);
  const { isLoading, subBreeds } = useSubBreeds();

  // data filter
  const [filter, setFilter] = useState({});

  // handlers
  const handleIndex = index => setIndex(index);
  const handlePreview = () => setPreview(p => !p);
  const handleSelectBreed = breed => setSelected(breed);

  const handleChange = name => {
    return e => {
      setFilter(prev => ({ ...prev, [name]: e }));
    }
  }

  const filterBreeds = () => {
    const size = filter.size;

    delete filter.size;

    const keywords = Object
      .values(filter)
      .join(",")
      .split(",")
      .filter(value => value !== "undefined");

    const s = subBreeds.filter(sb => {
      const pp = sb.keywords.map(kw => keywords.includes(kw.name));

      return pp.every(v => v);
    });

    setFiltered(s);
    setWasFilter(true);
  }

  const resetFilter = async () => {
    await Promise.all([
      setFiltered([]),
      setWasFilter(false),
      setPreview(false),
      setIndex(0),
      setFilter({}),
      setSelected({}),
    ]);
  }

  return (
    <div maxW="lg" centerContent>
      <Tabs index={index} variant="soft-rounded">
        <Center>
          <TabList>
            {questions.map((_, index) => (
              <Tab key={`tab-index-${index}`} isDisabled>{index + 1}</Tab>
            ))}
          </TabList>
        </Center>
        <TabPanels>
          { questions.map(question => (
              <TabPanel key={`quietion-key-${question.name}`}>
                <Form
                  name={question.name}
                  title={question.title}
                  options={question.options}
                  onChange={handleChange}
                  defaultValue={filter[question.name]}
                />
              </TabPanel>
            ))
          }
        </TabPanels>

        <Container>
          <Collapse in={index >= questions.length - 1}>
            <Stack spacing={4}>
              <Button
                color="white"
                colorScheme={wasFilter ? "orange" : "green"}
                type="submit"
                width="100%"
                onClick={wasFilter ? resetFilter : filterBreeds}
              >
                {wasFilter ? "Reintentar" : "Buscar"}
              </Button>
            </Stack>
          </Collapse>

          <Collapse in={index < questions.length - 1}>
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
                isDisabled={index >= questions.length - 1}
                onClick={() => handleIndex(index + 1)}
              >
                proxima
              </Button>
            </Stack>
          </Collapse>
        </Container>
      </Tabs>
      <Divider mt="10" />
      
     { filtered.length >= 1 && (
        <Center>
          <Heading mt="25">Filtradas</Heading>
        </Center>
     )}

      <SimpleGrid
        mt="5"
        spacing={4}
        minChildWidth="300px"
      >
        {filtered.map(subBreed => (
            <LinkBox
              onClick={() => {
                handleSelectBreed(subBreed);
                handlePreview();
              }}
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
              key={`filter-${subBreed.id}`}
            >
              <Heading size="md" my="2">
                <LinkOverlay href="#" isTruncated>
                  {subBreed.name}
                </LinkOverlay>
              </Heading>
              <Text mb="3" isTruncated noOfLines="3">
                {subBreed.short_description}
              </Text>
              <Box
                as="a"
                color="teal.400"
                fontWeight="bold"
              >
                Abrir modal
              </Box>
            </LinkBox>
          ))
        }
      </SimpleGrid>

      <Divider mt="10" />

      <Center>
        <Heading mt="25">Razas</Heading>
      </Center>

      <SimpleGrid
        mt="5"
        spacing={4}
        minChildWidth="300px"
        className="list"
      >
        {subBreeds.map(subBreed => (
            <LazyLoad>
              <LinkBox
                onClick={() => {
                  handleSelectBreed(subBreed);
                  handlePreview();
                }}
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
                key={subBreed.id}
              >
                <Heading size="md" my="2">
                  <LinkOverlay href="#" isTruncated>
                    {subBreed.name}
                  </LinkOverlay>
                </Heading>
                <Text mb="3" isTruncated noOfLines="3">
                  {subBreed.short_description}
                </Text>
                <Box
                  as="a"
                  color="teal.400"
                  fontWeight="bold"
                >
                  Abrir modal
                </Box>
              </LinkBox>
            </LazyLoad>
          ))
        }
      </SimpleGrid>

      {/* breed details */}
      <BreedDetails
        isOpen={isPreview}
        onClose={() => {
          handleSelectBreed({});
          handlePreview();
        }}
        breed={selected}
      />
    </div>
  );
}
