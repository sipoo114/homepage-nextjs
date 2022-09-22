import { Box, Image, Text} from "@chakra-ui/react"
import Carousel from "react-multi-carousel"

const ComingSoon = () => {
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
              src="https://i.imgur.com/sUcvPSr.jpg" w={'270px'} h={'270px'}/>
            <Box className="product-slider-detail">
              <Text 
                textAlign={'center'}
                fontWeight={600}>BLACKPINK VENOM</Text>
              <Text 
                textAlign={'center'}
                fontSize={'14px'}
                color='#4751CE'
                mt='1'>blackpink venom</Text>
            </Box>
          </Box>
          <Box className="product-slider">
            <Image 
              className="product-slider-img"
              src="https://i.imgur.com/tcdZLIp.jpg" w={'270px'} h={'270px'} />
            <Box className="product-slider-detail">
              <Text 
                textAlign={'center'}
                fontWeight={600}>SPIDER-MAN</Text>
              <Text 
                textAlign={'center'}
                fontSize={'14px'}
                color='#4751CE'
                mt='1'>spider-man</Text>
            </Box>
          </Box>
          <Box className="product-slider">
            <Image 
              className="product-slider-img"
              src="https://i.imgur.com/XZkK7bj.jpg" w={'270px'} h={'270px'} />
            <Box className="product-slider-detail">
              <Text 
                textAlign={'center'}
                fontWeight={600}>GOD OF WAR</Text>
              <Text 
                textAlign={'center'}
                fontSize={'14px'}
                color='#4751CE'
                mt='1'>god of war</Text>
            </Box>
          </Box>
      </Carousel>
    </Box>
  )
}

export default ComingSoon