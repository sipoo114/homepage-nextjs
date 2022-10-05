import { Box, InputGroup, Input, InputRightElement, Text, Flex, Image, HStack } from "@chakra-ui/react"


const ChoosePayment = () => {
  return (
    <Box className="max-width-900" mt='50px'>
      <Box fontWeight={600} mb='30px'>
        <InputGroup size='md'>
          <Input
            bgColor='#F6F6F6'
            color='#8F8F8F'
            border={'none'}
            borderRadius='25px'
            fontWeight={600} 
            pr='4.5rem'
            placeholder='Total Payment'/>
          <InputRightElement width='6.5rem'>
            <Text>Rp955.000</Text>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box>
        <Box 
          mb='10px'
          fontWeight={600}
          fontSize='20px'>
          <Text>Wallet</Text>
        </Box>
        <Box mb='30px'>
          <HStack>
            <Box mr='10px' className="rp-icon">
              <Text className="rp-text">Rp</Text>
            </Box>
            <Box w='900px'>
              <Text 
                color='#5A5A5A'
                fontSize='16px'>Rupiah Balance</Text>
              <Text
                fontSize='25px'
                fontWeight={600}
                >Rp100.000</Text>
            </Box>
            <Box w='50px'>
              <Image src="https://i.imgur.com/nXoY11H.png"/>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box>
        <Box mb='20px'>
          <Text
            fontSize='20px'
            fontWeight={600}>Virtual Account</Text>
        </Box>
        <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/f6XY2vL.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>BCA Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/QwPGBwe.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>Permata Bank Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/c5OlV9i.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>BRI Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/hod5Wg0.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>Mandiri Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/d5hQWr8.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>BNI Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/HQkyZQa.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>CIMB Virtual Account</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
      </Box>
      <Box>
        <Box
          mt='20px'
          mb='10px'
          fontWeight={600}
          fontSize='20px'>
          <Text>QRIS</Text>
        </Box>
        <Box>
          <Box mb='15px'>
          <HStack>
            <Image 
            w='50px'
            mr='10px'
            src="https://i.imgur.com/4wHgaBY.png"/>
            <Text
            w='900px'
            color='#5A5A5A'>QR Code</Text>
            <Image 
            w='50px'
            src="https://i.imgur.com/nXoY11H.png"/>
          </HStack>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChoosePayment