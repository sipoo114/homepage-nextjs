import { Box, Button, Text } from "@chakra-ui/react"
import ProductItem from "../Component/ProductItem"


const MainSection = () => {
  return (
    <Box>
      <Box>
      <Text 
        fontWeight={600}
        fontSize='25px'
        >MurzPersonas</Text>
      <Text
        fontSize={'18px'}
        color='#8F8F8F'
        mb={'10px'}>Create By Ecomurz</Text>
      <Text
        color={'#5A5A5A'}
        mb='10px'
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, qui ipsam mollitia aliquid fugiat, accusamus distinctio et tempore consectetur odio </Text>
      <Text
        fontWeight={600}
        textDecoration="underline">See More</Text>
      </Box>
      <Box mt="20px">
        <Button className="btn-product-list">Item</Button>
        <Button mr='10px' ml='10px' className="btn-product-list">Detail</Button>
        <Button className="btn-product-list">Activity</Button>
      </Box>
      <Box>
        <ProductItem/>
      </Box>
    </Box>
  )
}

export default MainSection