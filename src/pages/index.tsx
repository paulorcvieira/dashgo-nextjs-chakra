import { Flex, Button, Stack } from '@chakra-ui/react'
import Input from '../components/Forms/Input'

export default function Home() {
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
          <Input
            name="email"
            type="email"
            label="Email"
          />

          <Input
            name="password"
            type="password"
            label="Password"
          />

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
