import { Box, Flex, Text, Button, Image, VStack, HStack, Badge } from "@chakra-ui/react";
import { FaCheckCircle, FaClock, FaShoppingCart } from "react-icons/fa";

const activities = [
  {
    username: "User123",
    timestamp: "10 mins ago",
    description: "Purchased the Exclusive Champion Pack",
    imageUrl: "https://images.unsplash.com/photo-1536584754829-12214d404f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBjaGFtcGlvbiUyMHBhY2t8ZW58MHx8fHwxNzE0NDM3ODM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    price: "$199.99",
  },
  {
    username: "CollectorMike",
    timestamp: "30 mins ago",
    description: "Reserved a Rookie Debut Pack",
    imageUrl: "https://images.unsplash.com/photo-1536584754829-12214d404f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29raWUlMjBkZWJ1dCUyMHBhY2t8ZW58MHx8fHwxNzE0NDM3ODQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    price: "$49.99",
  },
  {
    username: "JaneDoe42",
    timestamp: "1 hour ago",
    description: "Completed the Legendary Set",
    imageUrl: "https://images.unsplash.com/photo-1601162937667-08f083516d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWdlbmRhcnklMjBzZXQlMjBjYXJkc3xlbnwwfHx8fDE3MTQ0Mzc4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    price: "N/A",
  },
];

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          Live Activity Feed
        </Text>
        {activities.map((activity, index) => (
          <Flex key={index} p={5} bg="gray.700" w="full" borderRadius="lg" boxShadow="md" align="center" justify="space-between">
            <HStack spacing={4}>
              <Image borderRadius="full" boxSize="50px" src={activity.imageUrl} alt="Activity Image" />
              <VStack align="start">
                <Text color="white" fontWeight="bold">
                  {activity.username}
                </Text>
                <Text color="gray.300" fontSize="sm">
                  <FaClock /> {activity.timestamp}
                </Text>
                <Text color="white">{activity.description}</Text>
              </VStack>
            </HStack>
            <VStack>
              <Badge colorScheme="green" p={2} borderRadius="full">
                {activity.price}
              </Badge>
              <Button colorScheme="blue" leftIcon={<FaShoppingCart />} mt={2}>
                Check it out!
              </Button>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
