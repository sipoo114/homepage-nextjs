import { Box } from "@chakra-ui/react"
import Banner from "./Partials/Banner"
import NavProduct from "./Partials/NavProduct"
import ProductIcon from "./Partials/ProductItem"
import NavOnGoing from "./Partials/NavOnGoing"
import OnGoing from "./Partials/OnGoing"
import NavComingSoon from "./Partials/NavComingSoon"
import ComingSoon from "./Partials/ComingSoon"
import TrendingCollectionsNav from "./Partials/TrendingCollectionsNav"
import TrendingCollections from "./Partials/TrendingCollections"
import NavHotItems from "./Partials/NavHotItems"
import HotItems from "./Partials/HotItems"
import TutorialNav from "./Partials/TutorialNav"
import Tutorial from "./Partials/Tutorial"

const Homepages = () => {
  return (
    <Box className="max-width">
      <Banner/>
      <NavProduct/>
      <ProductIcon/>
      <NavOnGoing/>
      <OnGoing/>
      <NavComingSoon/>
      <ComingSoon/>
      <TrendingCollectionsNav/>
      <TrendingCollections/>
      <NavHotItems/>
      <HotItems/>
      <TutorialNav/>
      <Tutorial/>
    </Box>
  )
}

export default Homepages