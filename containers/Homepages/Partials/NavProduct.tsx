import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";


const NavProduct = () => {
  return (
    <Box mt="60px">
      <SimpleGrid columns={2}>
        <Box>
          <Button
            className="button-nav"
            leftIcon={<Image src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/tiket-vektor.png" width='18px' height='18px'/>}>
            Ticket
          </Button>
          <Button 
            className="button-nav" 
            ml={'10px'} mr={'10px'}
            leftIcon={<Image src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/membership-vektor.png" width='18px' height='18px'/>}>
            Membership
          </Button>
          <Button 
            className="button-nav"
            leftIcon={<Image src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/rocket.png" width='18px' height='18px'/>}>
            Launchpad
          </Button>
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

export default NavProduct