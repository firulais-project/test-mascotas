// import { MdCheckCircle } from 'react-icons/md';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Heading,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  LinkOverlay,
  Divider,
  Tag,
  HStack,
  UnorderedList,
  ListItem,
  DrawerCloseButton,
  Kbd
} from '@chakra-ui/react';

export default function BreedDetails({ breed, onClose, isOpen }) {
  const tags = breed.tags || [];
  const keywords = (breed.keywords || []);

  const capitalize = value => value.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      isOpen={isOpen}
      size="xl"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Heading mt="25">Detalles</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Grid
              // emplateRows="repeat(1, 1fr)"
              // templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              {/* <GridItem rowSpan={2} colSpan={1}>
                <Image
                  src=""
                  alt={breed.name}
                />
              </GridItem> */}
              <GridItem colSpan={4}>
                <Heading size="xl" my="4">
                  {breed.name}
                </Heading>
                
                {/* tags  */}
                <HStack spacing={1}>
                  {tags.map(tag => (
                      <Tag key={tag.id} variant="solid">
                        {capitalize(tag.name)}
                      </Tag>
                    ))
                  }
                </HStack>
                
                <Divider mt="5" />
                
                <Heading size="md" my="2">
                  Descripción
                </Heading>
                
                <Text>
                  {breed.description}
                </Text>

                <Divider mt="5" />
                <Heading size="md" my="2">
                  Caracteristicas
                </Heading>
                <Text>
                  <strong>Tamaño:</strong> <Kbd>{breed.size}</Kbd>
                </Text>
                <Text>
                  <strong>Pais de origen:</strong> <Kbd>{breed.country}</Kbd>
                </Text>
                <Text>
                  <strong>Años de vida (Apox.):</strong> <Kbd>{breed.lifetime}</Kbd>
                </Text>

                { keywords.length >= 1 && (
                  <>
                    <Divider mt="5" />
                    <Heading size="md" my="2">
                      Mas detalles
                    </Heading>
                  </>
                )}

                {/* more details */}
                <UnorderedList spacing={3}>
                  {keywords.map(keyword => (
                      <ListItem key={keyword.id}>
                        {capitalize(keyword.name)}
                      </ListItem>
                    ))
                  }
                </UnorderedList>

                <Divider mt="5" />
              </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}