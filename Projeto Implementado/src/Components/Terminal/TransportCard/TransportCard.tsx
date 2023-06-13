import * as React from 'react';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import TopCard from '@/Components/Cards/TopCard';
import { Router, useRouter } from 'next/router';


export const TransportCard = () => {

  const Router = useRouter();
  
  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Insira o cartão de transporte
        </Text>
      </Box>
      <SimpleGrid columns={1} spacing={10}>
        <TopCard title='Insira' onClick={() => Router.push('/top/money/Recharge')} />
      </SimpleGrid>
    </Box>
  )
}
