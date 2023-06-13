import * as React from 'react';

import Footer from '@/Components/Footer/Footer';
import { RechargeValue } from '@/Components/Terminal/RechargeValue/RechargeValue';
import { Validation } from '@/Components/SingleTicket/Validation/Validation';

const Choose = () => {
  return (
    <>
      <Validation />
      <Footer />
    </>
  )
}

export default Choose;