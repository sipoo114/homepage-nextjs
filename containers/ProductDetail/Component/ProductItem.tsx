import { Box, SimpleGrid, Image, Text, UnorderedList, ListItem, Button} from "@chakra-ui/react"
import { useRouter } from "next/router"

const ProductItem = () => {
  const router = useRouter ();

  const direction = () => {
    router.push('/product-class')
  }

  return (
    <Box mt='20px' mb='80px'>
      <SimpleGrid columns={2} spacing={10}>
        <Box className="tutorial-items"
          boxShadow={'0px 4px 16px #EEEEEE'}
          borderRadius={'20px'}>
          <Image className="product-slider-img"
            src="https://storage.googleapis.com/dev-ser-morpheus/events/bennerAmot.png"/>
          <Text
            fontSize='18px'
            fontWeight={600}
            pl='10px'>Worker Murz</Text>
          <Text
            fontSize='12px'
            pl='10px'
            mb='10px'
            color='#5A5A5A'>Murz Personal</Text>
          <UnorderedList 
            pl='10px' 
            mb='13px' 
            color='#5A5A5A'
            fontSize='12px'>
            <ListItem>Ini benefinya guys</ListItem>
            <ListItem>Pap Ayang</ListItem>
            <ListItem>PukPuk</ListItem>
          </UnorderedList>
          <Text 
            fontSize='12px'
            pl='10px'
            color='#5A5A5A'>Starting from</Text>
          <Text 
            fontSize='18px'
            fontWeight={600}
            pl='10px'
            mb='10px'>Rp300.000</Text>
          <Button className="btn-product" onClick={direction}
            fontWeight={600}
            transitionDuration='0.5s'
            ml='10px'
            mb='10px'>Buy</Button>
        </Box>
        <Box className="tutorial-items"
          boxShadow={'0px 4px 16px #EEEEEE'}
          borderRadius={'20px'}>
          <Image className="product-slider-img"
            src="https://storage.googleapis.com/dev-ser-morpheus/events/bennerAmot.png"/>
          <Text
            fontSize='18px'
            fontWeight={600}
            pl='10px'>Worker Murz</Text>
          <Text
            fontSize='12px'
            pl='10px'
            mb='10px'
            color='#5A5A5A'>Murz Personal</Text>
          <UnorderedList 
            pl='10px' 
            mb='13px' 
            color='#5A5A5A'
            fontSize='12px'>
            <ListItem>Ini benefinya guys</ListItem>
            <ListItem>Pap Ayang</ListItem>
            <ListItem>PukPuk</ListItem>
          </UnorderedList>
          <Text 
            fontSize='12px'
            pl='10px'
            color='#5A5A5A'>Starting from</Text>
          <Text 
            fontSize='18px'
            fontWeight={600}
            pl='10px'
            mb='10px'>Rp300.000</Text>
          <Button className="btn-product" onClick={direction}
            transitionDuration='0.5s'
            fontWeight={600}
            ml='10px'
            mb='10px'>Buy</Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ProductItem