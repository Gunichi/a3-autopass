import {
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

interface QrCodeProps {
  onClick?: () => void;
}

function QrCode({ onClick }: QrCodeProps) {
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
          src='./Qr.png'
          roundedTop="lg"
        />
        <Text mt="2" fontSize="xl" fontWeight="semibold" color="white" textAlign={'center'} >
          QRCode
        </Text>
      </Box>
    </Flex>
  );
}

export default QrCode;