import * as React from 'react';

import Footer from '@/Components/Footer/Footer';
import { PaymentOptions } from '@/Components/Terminal/PaymentOptions/PaymentOptions';

const Payment = () => {
  return (
    <>
      <PaymentOptions />
      <Footer />
    </>
  )
}

export default Payment;