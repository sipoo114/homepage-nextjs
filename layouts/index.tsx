import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const MainLayout = ({
    children
}: any) => {
    return (
        <Box>
            <Navbar/>
                <Box minH={'80vh'}>
                 {children}
                </Box>
            <Footer/>
        </Box>
    )
}

export default MainLayout