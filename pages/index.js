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
import { quetions } from '../data/quetions';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isPreview, setPreview] = useState(false);
  const [selected, setSelected] = useState({});
  const { isLoading, subBreeds } = useSubBreeds();

  const handleIndex = index => setIndex(index);
  const handlePreview = () => setPreview(p => !p);
  const handleSelectBreed = breed => setSelected(breed);

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
        <Heading mt="25">Razas</Heading>
      </Center>

      <SimpleGrid
        mt="5"
        columns={3}
        spacing={4}
      >
        {subBreeds.map(subBreed => (
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
