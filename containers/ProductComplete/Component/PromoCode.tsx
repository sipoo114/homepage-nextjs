import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"


const PromoCode = () => {
  return (
    <Box mb='30px'>
      <Box mb='20px'>
        <Text 
          fontSize='20px'
          fontWeight={600}
          >Promo Code</Text>
      </Box>
      <Box>
      <InputGroup size='lg'>
        <Input 
          pr='4.5rem'
          placeholder="Promo Code (Optional)"/>
        <InputRightElement width='4.5rem'>
          <Button className="btn-apply"
            h='1.7rem' 
            size='sm'>Apply</Button>
        </InputRightElement>
      </InputGroup>
      </Box>
    </Box>
  )
}

export default PromoCode