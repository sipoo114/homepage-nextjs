import type { NextPage } from "next";
import MainLayout from "../../layouts";
import ProductClassPages from "../../containers/PruductClass";

const ProductClass: NextPage = () => {
  return (
    <MainLayout>
      <ProductClassPages/>
    </MainLayout>
  )
}

export default ProductClass