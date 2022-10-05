import type { NextPage } from "next";
import PaymentPagesClass from "../../containers/ChoosePayment";
import MainLayout from "../../layouts";

const PaymentPages:NextPage = () => {
  return (
    <MainLayout>
      <PaymentPagesClass/>
    </MainLayout>
  )
}

export default PaymentPages