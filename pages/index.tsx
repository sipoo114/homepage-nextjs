import type { NextPage } from 'next'
import MainLayout from '../layouts'
import Homepages from '../containers/Homepages'

const Home: NextPage = () => {
  return (
   <MainLayout>
    <Homepages/>
   </MainLayout>
  )
}

export default Home
