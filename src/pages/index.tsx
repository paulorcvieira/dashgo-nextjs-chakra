import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Home;
