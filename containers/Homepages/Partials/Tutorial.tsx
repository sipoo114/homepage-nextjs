import { Box, Image, Text } from "@chakra-ui/react"
import Carousel from "react-multi-carousel"

const Tutorial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Box mt='5' mb='100px'>
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
          <Box className="tutorial-items"
            boxShadow={'0px 4px 16px #EEEEEE'}
            borderRadius={'20px'}
            p="5px"
            >
            <Image className="tutorial-items-img"
            src="https://i.ytimg.com/vi/KKzRT2hZR8o/maxresdefault.jpg"/>
            <Text
              fontWeight={600}
              textAlign="center"
              mt={'15px'}
              > How to Top Up Balance</Text>
          </Box>
          <Box className="tutorial-items"
            boxShadow={'0px 4px 16px #EEEEEE'}
            borderRadius={'20px'}
            p="5px">
            <Image className="tutorial-items-img"
            src="https://i.ytimg.com/vi/KKzRT2hZR8o/maxresdefault.jpg"/>
            <Text
              fontWeight={600}
              textAlign="center"
              mt={'15px'}
              > How to Top Up Balance</Text>
          </Box>
          <Box className="tutorial-items"
            boxShadow={'0px 4px 16px #EEEEEE'}
            borderRadius={'20px'}
            p="5px">
            <Image className="tutorial-items-img"
            src="https://i.ytimg.com/vi/KKzRT2hZR8o/maxresdefault.jpg"/>
            <Text
              fontWeight={600}
              textAlign="center"
              mt={'15px'}
              > How to Top Up Balance</Text>
          </Box>
      </Carousel>
    </Box>
  )
}

export default Tutorial