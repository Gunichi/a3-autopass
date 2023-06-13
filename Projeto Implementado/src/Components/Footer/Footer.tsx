import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';


export default function Footer() {

  return (
    <Flex align='center' justify='center' direction='row' bg='branding.900'>
      <Flex align='flex-start' justifyContent={'flex-start'} direction='column'>
        <Image src='https://i.imgur.com/NhrKh0x.png' />
      </Flex>
      <Box bg='branding.700' p={10} color='white' borderRadius={10} width={'100%'} justifyContent={'center'}>
        <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Atendimento: 0800 770 7722
        </Text>
        <Text fontSize={'md'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Terminal 1.0.0
        </Text>
        <Text fontSize={'md'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          Versão 1.0
        </Text>
        <Text fontSize={'2xl'} color={'white'} textAlign={'center'} fontWeight={'bold'}>
          {new Date().toLocaleDateString()} - {new Date().getHours()}:{new Date().getMinutes()}
        </Text>
      </Box>
      <Flex align='flex-end' justifyContent={'flex-end'} direction='column'>
        <Image src='https://i.imgur.com/pS9pLoq.png' width={'40%'} height={'80%'} />
      </Flex>
    </Flex>
  );
}