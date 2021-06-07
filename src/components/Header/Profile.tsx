import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paulo Vieira</Text>
          <Text color="gray.300" fontSize="small">
            paullocostta86@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Paulo Vieira" src="https://github.com/paulorcvieira.png" />
    </Flex>
  );
}
