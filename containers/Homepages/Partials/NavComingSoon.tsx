import { Box, Button, SimpleGrid, Text} from "@chakra-ui/react"


const NavComingSoon = () => {
  return (
    <Box mt="60px">
      <SimpleGrid columns={2}>
        <Box>
          <Text
            fontWeight={600}
            fontSize='3xl'
            pl={'4'}>Coming Soon</Text>
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

export default NavComingSoon