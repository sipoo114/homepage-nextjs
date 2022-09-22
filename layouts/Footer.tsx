import { Box, SimpleGrid, Image, Flex, Text, Stack} from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box boxShadow="0px -4px 10px #EEEEEE" padding={'30px'}>
            <SimpleGrid className="max-width" columns={4}>
                <Box>
                    <Image marginBottom='15px'
                        src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/black-logo.png"
                        width="155px" height="20px"/>
                    <Text color="#8F8F8F">
                        we are bidging real life into the metaverse.Owning NFT's has never been this easy.
                    </Text>
                    <Flex paddingTop='10px'>
                        <Image src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/Frame%206116.svg" mr='10px'/>
                        <Image src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/Frame%205893.svg"/>
                    </Flex>
                </Box>
                <Box>
                    <Stack paddingLeft='50px'>
                        <Text fontWeight='bold' mb='5px'>Company</Text>
                        <Text color="#8F8F8F">About Us</Text>
                        <Text color="#8F8F8F">Contact Us</Text>
                        <Text color="#8F8F8F">Carier</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack>
                        <Text fontWeight='bold' mb='5px'>Help</Text>
                        <Text color="#8F8F8F">Fax</Text>
                        <Text color="#8F8F8F">Guidelines</Text>
                        <Text color="#8F8F8F">Disclaimer</Text>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight='bold'>Download App</Text>
                    <Flex marginLeft='-25px'>
                        <Image src="https://images.indianexpress.com/2017/01/apple-app-store-759.jpg" width='200px' height='100px'/>
                        <Image src="https://cdn.kibrispdr.org/data/750/logo-google-play-png-17.png" width='200px' height='100px'/>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Footer