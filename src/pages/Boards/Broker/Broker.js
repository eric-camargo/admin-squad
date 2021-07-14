import React, { useState } from 'react'

import PromotersList from './PromotersList'

const PROMOTERSDUMMYDATA = [{
  'id': '123141414',
  'name': 'jose da silva',
  'email': 'teste@teste.com',
  'phone': '1194464-6460',
  'recommendationsNum': '12',
  'validationsNum': '5',
  'visitsNum': '4',
  'documentationsNum': '2',
  'salesNum': '1',
},
{
  'id': '12312312313',
  'name': 'Marcos Silva',
  'email': 'teste@teste.com',
  'phone': '1194464-6460',
  'recommendationsNum': '6',
  'validationsNum': '5',
  'visitsNum': '4',
  'documentationsNum': '2',
  'salesNum': '1',
}
]

export default function Broker() {

  const [promotersData, setPromotersData] = useState(PROMOTERSDUMMYDATA)

  return (
    <div>
      <PromotersList promoters={promotersData}/>
    </div>
  )
}
