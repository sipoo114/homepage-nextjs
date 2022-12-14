import { Box, Image, Text} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";


const OnGoing = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5
    }
  };
  
  return (
    <Box mt={'5'}>
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
          itemClass="carousel-item-margin"
          arrows={false}
          >
        <Box className="product-slider">
            <Image 
              className="product-slider-img"
              src="https://i.imgur.com/8YOrsYW.jpg"/>
            <Box className="product-slider-detail">
              <Text 
                textAlign={'center'}
                fontWeight={600}>EDANE THE UNDEFEATED
              </Text>
            </Box>
          </Box>
          <Box className="product-slider">
            <Image 
              className="product-slider-img"
              src="https://i.imgur.com/8YOrsYW.jpg"/>
            <Box className="product-slider-detail">
              <Text 
                textAlign={'center'}
                fontWeight={600}>EDANE THE UNDEFEATED
              </Text>
            </Box>
          </Box>
      </Carousel>
    </Box>
  )
}

export default OnGoing