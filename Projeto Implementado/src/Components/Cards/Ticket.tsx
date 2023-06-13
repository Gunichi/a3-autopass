import {
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

interface TicketProps {
  onClick?: () => void;
}

function Ticket({ onClick }: TicketProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg='#065A61'
        maxW="sm"
        rounded="lg"
        shadow="lg"
        position="relative"
        padding={10}
        onClick={onClick}
        cursor='pointer'
      >
        <Image
          src='./bilheteUnico.png'
          roundedTop="lg"
        />
        <Text mt="2" fontSize="xl" fontWeight="semibold" color="white" textAlign={'center'} >
          Bilhete Único
        </Text>
      </Box>
    </Flex>
  );
}

export default Ticket;