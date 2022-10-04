import type { NextPage } from "next";
import ProductCompleteClass from "../../containers/ProductComplete";
import MainLayout from "../../layouts";


const ProductComplete: NextPage = () => {
  return (
    <MainLayout>
      <ProductCompleteClass/>
    </MainLayout>
  )
}

export default ProductComplete