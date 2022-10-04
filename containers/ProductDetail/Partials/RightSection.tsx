import { Box,Button } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const RightSection = () => {
  return (
    <Box>
      <Button className="btn-share"
        leftIcon={<ExternalLinkIcon/>}>
        Share
      </Button>
    </Box>
  )
}

export default RightSection