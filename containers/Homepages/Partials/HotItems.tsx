import { Box, Text, Image, Button, Flex} from "@chakra-ui/react"
import { WarningTwoIcon } from '@chakra-ui/icons'

const HotItems = () => {
  return (
    <Box 
      className="max-width"
      boxShadow={'0px 4px 16px #EEEEEE'}
      mt='5'
      borderRadius={'20px'}
      p='30px'>
      <Flex>
        <Box width={'70%'}>
          <Box>
            <Text
            fontWeight={600}
            fontSize="4xl"
            lineHeight={'45px'}
            mb="40px"
            >Our Hot Items is Ready Soon!</Text>
          </Box>
          <Box mt='15px'>
            <Flex>
              <Image src="https://i.imgur.com/7lrh51y.png"/>
              <Text 
              fontSize={'20px'}
              p='15px'
              >+200 People turn on notifications</Text>
            </Flex>
          </Box>
        </Box>
        <Box 
          width={'30%'}
          textAlign="end"
          padding={'20px'}>
          <Box mt={'10px'}>
            <Button className="btn-notify"
            leftIcon={<WarningTwoIcon/>}
            >
            Notify Me
            </Button>
          </Box>
          <Box mt={'10px'}>
           <Button className="btn-learn">
            Learn More
           </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default HotItems