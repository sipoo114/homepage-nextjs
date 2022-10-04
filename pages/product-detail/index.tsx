import type { NextPage } from "next";
import MainLayout from "../../layouts";
import ProductDetailPages from "../../containers/ProductDetail";

const ProductDetail: NextPage = () => {
  return (
    <MainLayout>
      <ProductDetailPages/>
    </MainLayout>
  )
}

export default ProductDetail