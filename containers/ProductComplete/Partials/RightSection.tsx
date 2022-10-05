import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"


const RightSection = () => {
  const router = useRouter ();

  const direction = () => {
    router.push ('/choose-payment')
  }

  return (
    <Box 
      p='30px 15px'
      borderRadius='10px'
      boxShadow={'0px 4px 16px #EEEEEE'}>
      <Box mb='15px'>
        <Flex>
          <Text
          fontWeight={600}
          fontSize='15px'
          width='50%'>Total Payment</Text>
          <Text
          fontWeight={600}
          fontSize='15px'
          width='50%'
          textAlign={'end'}>Rp940.000</Text>
        </Flex>
      </Box>
      <Box>
        <Button className="btn-order" onClick={direction}
          >Complete Order</Button>
      </Box>
    </Box>
  )
}

export default RightSection