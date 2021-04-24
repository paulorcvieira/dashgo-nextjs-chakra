import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import Icon from "@chakra-ui/icon"
import { Divider, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import Input from "../../components/Forms/Input"
import { RiAddLine } from '../../styles/icons'

export default function CreateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        leftIcon={<Icon as={RiAddLine} fontSize="16" />}
        onClick={onOpen}
      >
        Cadastrar novo
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent flex="1" borderRadius={8} bg="gray.800" p="8">
          <ModalHeader>Cadastrar usuário</ModalHeader>
          <Divider my="6" borderColor="gray.700" />

          <ModalCloseButton />

          <ModalBody pb={6}>
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="name" label="Nome completo" autoFocus />
                <Input name="email" label="E-mail" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" type="password" label="Senha" />
                <Input name="password_confirmation" type="password" label="Confirmação da senha" />
              </SimpleGrid>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button
                  colorScheme="whiteAlpha"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="pink">
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
