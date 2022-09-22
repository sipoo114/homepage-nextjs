import { Box, Image } from "@chakra-ui/react"
import Carousel from "react-multi-carousel"

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const imageList = [
    "https://i.imgur.com/xqFHvBw.jpg",
    "https://storage.googleapis.com/dev-ser-morpheus/banners/NFT_Apa.png",
    "https://i.imgur.com/xqFHvBw.jpg",
    "https://storage.googleapis.com/dev-ser-morpheus/banners/NFT_Apa.png"
  ]

  return (
    <Box marginTop="45px">
        <Carousel 
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          {imageList.map(item => (
            <Image src={item} className="img-slider"/>
          ))}
        </Carousel>
      </Box>
  )
}

export default Banner