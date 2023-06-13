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
  Button
} from '@chakra-ui/react';

import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsCash } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

export const PaymentOptions = () => {

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
          Forma de pagamento
        </Text>
      </Box>
      <Flex align='center' justify='center' direction='column' bg='branding.900'>
        <Accordion allowToggle width={'40%'} bg='branding.700'>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' p={5} color='white' fontWeight={'bold'} fontSize={'2xl'}>
                  Formas de pagamento             
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex align='center' justify='center' direction='column' bg='branding.500'>
                <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} mt={10} direction={'row'} onClick={() => Router.push('/top/money/rechargevalue')} cursor={'pointer'}>
                  <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
                    Débito
                  </Text>
                  <AiOutlineCreditCard size={35} />
                </Flex>
                <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/top/money/rechargevalue')} cursor='pointer' >
                  <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
                    Dinheiro
                  </Text>
                  <BsCash size={35} />
                </Flex>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  )
}
