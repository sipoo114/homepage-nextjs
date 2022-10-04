import { Box, Divider, Flex, Text } from "@chakra-ui/react"


const OrderSummary = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize='20px'
          fontWeight={600}
          mb='20px'
          >Order Summary</Text>
      </Box>
      <Box>
        <Flex>
          <Box width='60%' color='#5A5A5A'>
            <Text>Total Price (3 item)</Text>
            <Text mt='10px' mb='15px'>Admin Fee</Text>
            <Text>Discount Promo</Text>
          </Box>
          <Box width='40%' textAlign='end'>
            <Text fontWeight={600}>Rp950.000</Text>
            <Text mt='10px' mb='15px' fontWeight={600}>+Rp5.000</Text>
            <Text fontWeight={600}>-Rp0</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
    
  )
}

export default OrderSummary