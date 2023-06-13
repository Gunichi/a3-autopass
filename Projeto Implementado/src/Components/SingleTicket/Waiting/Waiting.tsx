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

export const Waiting = () => {

  const Router = useRouter();

  return (
    <Box bg="white" w="100%" p={4} color="white" onClick={() => Router.push('/singleTicket/debit/Done')} cursor={'pointer'}>
      <Button bg='branding.700' color='white' borderRadius={10} width={'10%'} justifyContent={'center'} mb={10} mt={10} mr={10} ml={10} leftIcon={<IoArrowBackOutline size={35} />}>
        <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Voltar
        </Text>
      </Button>
      <Flex align='center' justify='center' direction='column' bg='branding.900' mb={60}>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Efetuando pagamento
        </Text>       
        <Text fontSize="2xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Cancelando em 60 segundos
        </Text>
      </Flex>
    </Box>
  )
}
