import { Box, Container, Flex, Grid, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={6}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Flex>
            <Link href="#" mx={2}>Home</Link>
            <Link href="#" mx={2}>World</Link>
            <Link href="#" mx={2}>Business</Link>
            <Link href="#" mx={2}>Tech</Link>
            <Link href="#" mx={2}>Culture</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={6} px={6}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 6 }}>
          <Heading as="h2" size="xl" mb={4}>Main Headline</Heading>
          <Text fontSize="lg" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>

          {/* Grid Layout for Articles */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="md" mb={2}>Article 1</Heading>
              <Text>Short description of the article content.</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="md" mb={2}>Article 2</Heading>
              <Text>Short description of the article content.</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="md" mb={2}>Article 3</Heading>
              <Text>Short description of the article content.</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="md" mb={2}>Article 4</Heading>
              <Text>Short description of the article content.</Text>
            </Box>
          </Grid>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.50" p={4} mt={{ base: 6, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <Text mb={4}>Additional content or advertisements can go here.</Text>
          <Box bg="gray.200" p={4} mb={4}>
            <Text>Ad 1</Text>
          </Box>
          <Box bg="gray.200" p={4}>
            <Text>Ad 2</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6} mt={6}>
        <Flex justify="space-between" align="center" px={6}>
          <Text>&copy; 2023 Financial Times</Text>
          <Flex>
            <Link href="#" mx={2}>Privacy Policy</Link>
            <Link href="#" mx={2}>Terms of Service</Link>
            <Link href="#" mx={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;