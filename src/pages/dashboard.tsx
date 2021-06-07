import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Charts from "../components/Charts";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my={["2", "6"]} maxWidth={1480} mx="auto" px={["2", "6"]}>
        <Sidebar />

        <Charts />
      </Flex>
    </Flex>
  )
}
