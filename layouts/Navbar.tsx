import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Spacer, Text } from "@chakra-ui/react"
import {SearchIcon} from '@chakra-ui/icons'



const Navbar = () => {
    return(
        <Box padding={"20px"} boxShadow="0px 4px 16px #EEEEEE">
            <Flex className="max-width">
                <Box width="50%">
                    <Flex>
                        <Box paddingTop={'11px'} width="35%">
                            <Image
                                src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/black-logo.png"
                                width="155px" height="20px"
                            />
                        </Box>
                        <Box width="65%">
                            <InputGroup >
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='#333333'/>}
                                />
                                <Input 
                                    placeholder="search something.."
                                    borderRadius={'25px'}
                                    border='none'
                                    bgColor='#F6F6F6'
                                    color='#8F8F8F'
                                    />
                            </InputGroup>
                        </Box>
                    </Flex>
                </Box>
                <Box width="50%">
                    <Flex>
                        <Box paddingTop={'5px'} width="75%" justifyContent={'left'} paddingLeft="40px">
                            <Flex gap={6}>
                                <Text fontSize="18px">Home</Text>
                                <Text fontSize="18px">Community</Text>
                                <Text fontSize="18px">Launchpad</Text>
                            </Flex>
                        </Box>
                        <Box marginLeft={'20px'} paddingTop={'8px'} width="25%">
                            <Flex gap={4} justifyContent='end'>
                                <Image
                                src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/black-profile.png"/>
                                <Image
                                src="https://storage.googleapis.com/prod-ser-morpheus/web-transactions/png/black-notif.png"/>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar