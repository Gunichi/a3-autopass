import * as React from 'react';

import { Box, Flex, SimpleGrid, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ChooseTerminal = () => {

  const Router = useRouter();

  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Selecione um terminal
        </Text>
      </Box>
      <Flex justifyContent={'center'} mb={10} mt={10} direction={'column'} alignContent={'center'} alignItems={'center'}>
        <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/top/money/rechargevalue')} cursor='pointer' >
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
            Qr Code
          </Text>
        </Flex>
        <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/top')} cursor='pointer' >
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
            Cartão Top - Dinheiro
          </Text>
        </Flex>
        <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/top/money/rechargevalue')} cursor='pointer' >
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
            Cartão Top - Débito
          </Text>
        </Flex>
        <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/top/money/rechargevalue')} cursor='pointer' >
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
            Bilhete Único - Dinheiro
          </Text>
        </Flex>
        <Flex bg='branding.700' p={5} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} direction={'row'} onClick={() => Router.push('/singleTicket')} cursor='pointer' >
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'} mr={5}>
            Bilhete Único - Débito
          </Text>
        </Flex>
      </Flex>

      
    </Box>
  );
}

export default ChooseTerminal;