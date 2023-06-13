import * as React from 'react';

import { Flex, Box, Button, Text } from '@chakra-ui/react';

import { Head } from 'next/document';
import Footer from '@/Components/Footer/Footer';
import { Cash } from '@/Components/SingleTicket/Cash/Cash';
import { Waiting } from '@/Components/SingleTicket/Waiting/Waiting';
import { Finish } from '@/Components/SingleTicket/Finish/Finish';


export default function Done() {
  return (
    <>
      <Finish />
      <Footer />
    </>
  )
}
