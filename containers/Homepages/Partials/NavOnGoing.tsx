import { Box, Button, SimpleGrid, Text} from "@chakra-ui/react"


const NavOnGoing = () => {
  return (
    <Box mt="60px">
      <SimpleGrid columns={2}>
        <Box>
          <Text
            fontWeight={600}
            fontSize='3xl'
            pl={'4'}>On Going</Text>
        </Box>
        <Box textAlign="end">
          <Button className="button-nav">
            See All
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default NavOnGoing