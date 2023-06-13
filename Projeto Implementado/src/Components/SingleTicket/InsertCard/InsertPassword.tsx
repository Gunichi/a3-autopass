import * as React from 'react';

import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  SimpleGrid,
  Circle,
  Input
} from '@chakra-ui/react';

import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsCash } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

export const InsertPassword = () => {

  const Router = useRouter();

  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Button bg='branding.700' color='white' borderRadius={10} width={'10%'} justifyContent={'center'} mb={10} mt={10} mr={10} ml={10} leftIcon={<IoArrowBackOutline size={35} />}>
        <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Voltar
        </Text>
      </Button>
      <Button bg='branding.700' color='white' borderRadius={10} width={'10%'} justifyContent={'center'} mb={10} mt={10} mr={10} ml={10} leftIcon={<IoArrowBackOutline size={35} />} onClick={() => Router.push('/top')}>
        <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Cancelar
        </Text>
      </Button>
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Insira sua senha
        </Text>
      </Box>
      <Flex align='center' justify='center' direction='column' bg='branding.900'>
        <Input type="password" placeholder="Senha" size="lg" width={'40%'} borderColor={'branding.700'} p={5} color='white' borderRadius={10} mb={10} mt={10} />
        <Button bg='branding.700' color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} mt={10} onClick={() => Router.push('/singleTicket/debit/Running')}>
          Confirmar
        </Button>
      </Flex>
    </Box>
  )
}
