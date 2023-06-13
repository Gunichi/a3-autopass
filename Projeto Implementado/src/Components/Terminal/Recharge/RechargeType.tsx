import * as React from 'react';

import { Flex, Box, Button, Text } from '@chakra-ui/react';

import TopCard from '@/Components/Cards/TopCard';
import { useRouter } from 'next/router';


export const RechargeType = () => {

  const Router = useRouter();

  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Insira o cartão de transporte
        </Text>
      </Box>
      <Flex align='center' justify='center' direction='column' bg='branding.900'>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} onClick={() => Router.push('/top/money/Payment')} cursor={'pointer'}>
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
            V.Ts
          </Text>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} mb={10} onClick={() => Router.push('/top/money/Payment')} cursor={'pointer'}>
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
            Comum
          </Text>
        </Box>
        <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'40%'} justifyContent={'center'} onClick={() => Router.push('/top/money/Payment')} cursor={'pointer'}>
          <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
            Escolar
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
