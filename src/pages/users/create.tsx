import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import Icon from "@chakra-ui/icon"
import Link from "next/link";
import {
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
  Box
} from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

import Input from "../../components/Forms/Input"
import { RiAddLine } from '../../styles/icons'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values);

    onClose()
  }

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
        <ModalContent flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
          <ModalHeader>Cadastrar usuário</ModalHeader>
          <Divider mb="3" borderColor="gray.700" />

          <ModalCloseButton />

          <ModalBody pb={6}>
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]}w="100%">
                <Input
                  name="name"
                  label="Nome completo"
                  error={errors.name}
                  {...register('name')}
                />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register('password')}
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button
                    colorScheme="whiteAlpha"
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
