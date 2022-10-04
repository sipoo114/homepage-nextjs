import { Box, Flex } from "@chakra-ui/react"
import LeftSection from "./Partials/LeftSection"
import RightSection from "./Partials/RightSection"

const ProductCompleteClass = () => {
  return (
    <Box className="max-width" mt='50px'>
      <Flex>
        <Box width='70%' mr='25px'>
          <LeftSection/>
        </Box>
        <Box width='30%'>
          <RightSection/>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProductCompleteClass