import * as React from 'react';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import ProductAddToCart from '@/Components/Cards/Ticket';
import TopCard from '@/Components/Cards/TopCard';
import QrCode from '@/Components/Cards/QrCode';
import Ticket from '@/Components/Cards/Ticket';
import { useRouter } from 'next/router';

export const Start = () => {

  const router = useRouter()

  return (

    <Box bg="white" w="100%" p={4} color="white">
      <Box>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          AutoPass Terminal
        </Text>
        <Text fontSize="6xl" fontWeight="bold" textAlign={'center'} color="branding.700">
          Selecione uma opção
        </Text>
      </Box>
      <SimpleGrid columns={3} spacing={10}>
        <TopCard title='Cartão Top' onClick={() => router.push('/top/money/Transport')} />
        <QrCode onClick={() => router.push('/top/money/Transport')} />
        <Ticket onClick={() => router.push('/singleTicket/saldo')} />
      </SimpleGrid>
    </Box>
  )
}
