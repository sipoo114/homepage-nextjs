import { Box, Text, Button, SimpleGrid, Flex} from "@chakra-ui/react"
import {ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon} from '@chakra-ui/icons'
import { useRouter } from "next/router";


const RightSection = () => {
  const router = useRouter ();

  const direction = () => {
    router.push ('/product-complete')
  }

  return (
    <Box>
      <Box boxShadow={'0px 4px 16px #EEEEEE'} p='20px'>
        <Box>
          <SimpleGrid columns={2}>
            <Box>
              <Text
              fontSize='20px'
              fontWeight={600}
              >Rp300.000
              </Text>
            </Box>
            <Box ml='auto'>
              <Flex>
                <ChevronLeftIcon/>
                <Text>0</Text>
                <ChevronRightIcon/>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt='15px'>
          <Button className="btn-buy" onClick={direction}>
            Buy Now
          </Button>
        </Box>
      </Box>
      <Box m='20px'>
        <Button className="btn-share"
        leftIcon={<ExternalLinkIcon/>}
        >Share
        </Button>
      </Box>
    </Box>
  )
}

export default RightSection