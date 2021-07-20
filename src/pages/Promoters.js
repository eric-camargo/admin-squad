import React, { useState } from 'react'

import Table from '../components/Listing/Table'
import classes from './Promoters.module.css'


export default function Promoters() {
  
  const header = [
    {
      name: 'promoterName',
      title: 'Promotor'
    },
    {
      name: 'email',
      title: 'Email'
    },
    {
      name: 'phone',
      title: 'Telefone'
    },
    {
      name: 'recommendationsNum',
      title: 'Indicações'
    },
    {
      name: 'validationsNum',
      title: 'Validações'
    },
    {
      name: 'visitsNum',
      title: 'Visitas'
    },
    {
      name: 'documentationsNum',
      title: 'Pastas'
    },
    {
      name: 'salesNum',
      title: 'Vendas'
    }
  ]
  
  const PROMOTERSDUMMYDATA = [{
    id: '123141414',
    promoterName: 'Jose da Silva',
    email: 'teste@teste.com',
    phone: '1194464-6460',
    recommendationsNum: 12,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 2,
    salesNum: 1,
  },{
    id: '12312312313',
    promoterName: 'Marcos Silva',
    email: 'teste@teste.com',
    phone: '1194464-6460',
    recommendationsNum: 6,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 2,
    salesNum: 1,
  }]

  const [promotersData, setPromotersData] = useState(PROMOTERSDUMMYDATA)

  return (
    <Table 
    header={header}
    data={promotersData}
    />
  )
}
