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
  name,
  options,
  onChange,
  defaultValue
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
          <RadioGroup
            onChange={onChange(name)}
            defaultValue={defaultValue}
          >
            <Stack spacing="20px" mt="5">
              { options.map((option) => (
                  <Radio
                    value={Array.isArray(option.value) ? option.value.join(',') : `${option.value}`}
                    // defaultChecked={index + 1 === defaultValue}
                  >
                    {option.label}
                  </Radio>
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