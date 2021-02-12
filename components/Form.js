import {
  Flex,
  Stack,
  Center,
  Heading,
  Divider,
  RadioGroup,
  Radio,
  Button,
  Text
} from '@chakra-ui/react';

const Form = ({
  title,
  options
}) => {
  return (
    <Flex justifyContent="center" mt="25">
      <Stack>
        <Center>
          <Heading fontWeight="500">{title}</Heading>
        </Center>
        <Center>
          <Text color="gray.500">Selecciona una de las opciones</Text>
        </Center>
        <Divider />
        <form>
          <RadioGroup>
            <Stack spacing="20px" mt="5">
              { options.map(option => (
                  <Radio>{option.label}</Radio>
                ))
              }
            </Stack>
          </RadioGroup>
          <Divider mt="5" />
        </form>
      </Stack>
    </Flex>
  );
}

export default Form;