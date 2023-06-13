import {
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

interface TopCardProps {
  title: string;
  onClick?: () => void;
}

function TopCard( { title, onClick }: TopCardProps ) {
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
          src='https://i.imgur.com/bPS0eQl.png'
          roundedTop="lg"
        />
        <Text mt="2" fontSize="xl" fontWeight="semibold" color="white" textAlign={'center'} >
          {title}
        </Text>
      </Box>
    </Flex>
  );
}

export default TopCard;