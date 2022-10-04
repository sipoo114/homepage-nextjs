import { Box, SimpleGrid } from "@chakra-ui/react"
import LeftSection from "./Partials/LeftSection"
import MainSection from "./Partials/MainSection"
import RightSection from "./Partials/RightSection"


const ProductClassPages = () => {
  return (
    <Box mt='50px'>
      <SimpleGrid columns={3} className="max-width">
        <Box>
          <LeftSection/>
        </Box>
        <Box>
          <MainSection/>
        </Box>
        <Box>
          <RightSection/>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ProductClassPages