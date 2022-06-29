import {
  Badge,
  Box,
  Center,
  ChakraProvider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BarChart } from "./components/BarChart";
import { LineDemo } from "./components/LineDemo";

function App() {
  return (
    <ChakraProvider>
      <Center h={[null, "100vh"]}>
        <Stack
          spacing={16}
          p={["24px", "0px"]}
          direction={["column", "column", "column", "row"]}
        >
          <Box
            minW="400px"
            maxW="750px"
            // maxH="320px"
            p={8}
            boxShadow="md"
            borderRadius="lg"
          >
            <HStack>
              <Heading size="lg">$2,420</Heading>
              <Badge variant="solid" colorScheme="green">
                ^2.5%
              </Badge>
            </HStack>
            <Text color="gray">Average Daily Sales</Text>
            <Box py={8} mt={16}>
              <BarChart />
            </Box>
          </Box>

          <Box minW="400px" maxW="750px" p={8} boxShadow="md" borderRadius="lg">
            <Box paddingBottom={4}>
              <HStack>
                <Heading size="sm">Sales This Month</Heading>
              </HStack>
              <Text color="gray">Users from all channels</Text>
            </Box>
            <HStack>
              <Heading size="lg">$14,094</Heading>
            </HStack>
            <Text color="gray">Another $48,346 to Goal</Text>
            <Box py={8}>
              <LineDemo />
            </Box>
          </Box>
        </Stack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
