import * as React from 'react';

import { Flex, Box, Button, Text } from '@chakra-ui/react';

import { Head } from 'next/document';
import Footer from '@/Components/Footer/Footer';
import { Cash } from '@/Components/SingleTicket/Cash/Cash';


export default function Saldo() {
  return (
    <>
      <Cash />
      <Footer />
    </>
  )
}
