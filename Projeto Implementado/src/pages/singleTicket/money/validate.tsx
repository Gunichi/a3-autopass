import * as React from 'react';

import Footer from '@/Components/Footer/Footer';

import { InsertCard } from '@/Components/SingleTicket/InsertCard/InsertCard';
import { ValidateInfos } from '@/Components/SingleTicket/ValidateInfos/ValidateInfos';

const Card = () => {
  return (
    <>
      <ValidateInfos />
      <Footer />
    </>
  )
}

export default Card;