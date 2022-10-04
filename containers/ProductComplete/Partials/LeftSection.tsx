import { Box } from "@chakra-ui/react"
import Banner from "../Component/Banner"
import OrderSummary from "../Component/OrderSummary"
import PromoCode from "../Component/PromoCode"


const LeftSection = () => {
  return (
    <Box>
      <Banner/>
      <PromoCode/>
      <OrderSummary/>
    </Box>
  )
}

export default LeftSection