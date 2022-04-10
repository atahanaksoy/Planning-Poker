import { Box, Center, Text, useColorMode } from "@chakra-ui/react";

export const PokerTable = () => {
  return (
    <Box
      bg="#D7E9FF"
      w={{ base: "50vw", md: "30vw", lg: "20vw" }}
      h="18vh"
      p={4}
      borderRadius="3xl"
      borderWidth="1px"
      alignItems="center"
    >
      <Center h="100%">
        <Text fontSize="lg" textAlign="center" color="black">
          Pick your cards!
        </Text>
      </Center>
    </Box>
  );
};
