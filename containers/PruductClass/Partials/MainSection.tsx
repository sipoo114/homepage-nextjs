import { Box, Text, UnorderedList, ListItem, } from "@chakra-ui/react"

const MainSection = () => {
  return (
    <Box>
      <Text
      fontWeight={600}
      fontSize='25px'>VVIP</Text>
      <Text
      fontSize='14px'
      color='#8F8F8F'
      mb='15px'
      >EDANE THE UNDERFEATED</Text>
      <Text
      fontSize='20px'
      fontWeight={600}
      mb='10px 0px'>Benefit</Text>
      <UnorderedList color='#5A5A5A'>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore neque necessitatibus officiis!</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque error perferendis iure?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
      </UnorderedList>
      <Text
      fontSize='20px'
      fontWeight={600}
      m='10px 0px'>How to Use</Text>
      <UnorderedList color='#5A5A5A'>
        <ListItem>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto enim cupiditate sequi at!</ListItem>
        <ListItem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate autem neque velit praesentium?</ListItem>
        <ListItem>Lorem ipsum dolor sit, amet consectetur adipisicing.</ListItem>
      </UnorderedList>
      <Text
      fontSize='20px'
      fontWeight={600}
      m='10px 0px'>Term and Condition</Text>
      <UnorderedList color='#5A5A5A'>
        <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptate facilis alias quaerat.</ListItem>
        <ListItem>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto reprehenderit enim delectus a.</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
      </UnorderedList>
    </Box>
  )
}

export default MainSection