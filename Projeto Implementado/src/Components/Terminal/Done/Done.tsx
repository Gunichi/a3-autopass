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
  Circle
} from '@chakra-ui/react';

import { AiOutlineCheckCircle, AiOutlineCreditCard } from 'react-icons/ai';
import { BsCash } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';

export const Done = () => {
  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Valor aceito e recarga realizada com sucesso!
        </Text>
        <Text fontSize="3xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          (não devolvemos troco nem aceitamos moedas)
        </Text>
      </Box>
      <Flex align='center' justify='center' direction='row' bg='branding.900'>
        <Button bg='branding.700' color='white' borderRadius={10} p='2' justifyContent={'center'} mb={10} mt={10} mr={10} ml={10}>
          Imprimir recibo e sair
        </Button>
        <Circle bg='branding.700' size='300px' color='white' mt={10}>
          <AiOutlineCheckCircle size={200} />
        </Circle>
        <Button bg='branding.700' color='white' borderRadius={10} p='2' justifyContent={'center'} mb={10} mt={10} mr={10} ml={10}>
          Não Imprimir recibo e sair
        </Button>

      </Flex>
    </Box>
  )
}
