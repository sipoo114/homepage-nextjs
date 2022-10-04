import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { ArrowRightIcon } from '@chakra-ui/icons'

const Banner = () => {
  return (
    <Box 
      backgroundColor="#F6F6F6" 
      p='20px'
      borderRadius='20px'
      mb='30px'>
      <Flex>
        <Box width='20%' mr='10px'>
          <Image src="https://i.imgur.com/SQkmMI6.png" width='70%'/>
        </Box>
        <Box width='60%'>
          <Text
            fontWeight={600}
            mb='10px'>VVIP</Text>
          <Text mb='10px'>
            <UnorderedList color='#5A5A5A'>
              <ListItem>Ini Benefitnya</ListItem>
              <ListItem>Product high class</ListItem>
            </UnorderedList>
          </Text>
          <Text fontWeight={600}>1 Item - Rp500.000</Text>
        </Box>
        <Box width='20%' pt='40px' textAlign={'end'}>
          <ArrowRightIcon/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Banner