import * as React from 'react';

import { Flex, Box, Button, Text } from '@chakra-ui/react';

import TopCard from '@/Components/Cards/TopCard';
import { useRouter } from 'next/router';


export const Cash = () => {

  const Router = useRouter();

  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Selecione o tipo de recarga
        </Text>
      </Box>
      <Flex align='center' justify='center' direction='column' bg='branding.900'>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} onClick={() => Router.push('/singleTicket/rechargevalue')} cursor={'pointer'}>
          <Flex align='center' justify='space-between'>
            <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
              V.Ts
            </Text>
            <Text fontSize={'2xl'} color={'branding.700'} textAlign={'center'} fontWeight={'bold'} p={5} bg={'white'} borderRadius={10}>
              Saldo: R$ 4,40
            </Text>
          </Flex>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} onClick={() => Router.push('/singleTicket/rechargevalue')} cursor={'pointer'}>
          <Flex align='center' justify='space-between'>
            <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
              Comum
            </Text>

            <Text fontSize={'2xl'} color={'branding.700'} textAlign={'center'} fontWeight={'bold'} p={5} bg={'white'} borderRadius={10}>
              Saldo: R$ 4,40
            </Text>
          </Flex>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb='10' onClick={() => Router.push('/singleTicket/rechargevalue')} cursor={'pointer'}>
          <Flex align='center' justify='space-between'>
            <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
              Escolar
            </Text>
            <Text fontSize={'2xl'} color={'branding.700'} textAlign={'center'} fontWeight={'bold'} p={5} bg={'white'} borderRadius={10}>
              Saldo: R$ 4,40
            </Text>
          </Flex>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb='10' onClick={() => Router.push('/singleTicket/rechargevalue')} cursor={'pointer'}>
          <Flex align='center' justify='space-between'>
            <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
              Temporal
            </Text>
            <Text fontSize={'2xl'} color={'branding.700'} textAlign={'center'} fontWeight={'bold'} p={5} bg={'white'} borderRadius={10}>
              Saldo: Expirado
            </Text>
          </Flex>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} onClick={() => Router.push('/singleTicket/rechargevalue')} cursor={'pointer'}>
          <Flex align='center' justify='space-between'>
            <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
              Compra Web
            </Text>
            <Text fontSize={'2xl'} color={'branding.700'} textAlign={'center'} fontWeight={'bold'} p={5} bg={'white'} borderRadius={10}>
              Saldo: Expirado
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
