import React, { useState } from 'react'

import Table from '../components/Listing/Table'
// import classes from './Promoters.module.css'


export default function Promoters() {
  
  const header = [{
      accessor: 'name',
      Header: 'Promotor'
    },{
      accessor: 'email',
      Header: 'Email'
    },{
      accessor: 'phone',
      Header: 'Telefone'
    },{
      accessor: 'recommendationsNum',
      Header: 'Indicações'
    },{
      accessor: 'validationsNum',
      Header: 'Validações'
    },{
      accessor: 'visitsNum',
      Header: 'Visitas'
    },{
      accessor: 'documentationsNum',
      Header: 'Pastas'
    },{
      accessor: 'salesNum',
      Header: 'Vendas'
    }]
  
  const PROMOTERSDUMMYDATA = [{
    id: '123141414',
    name: 'Jose da Silva',
    email: 'teste@teste.com',
    phone: '1194464-6460',
    recommendationsNum: 12,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 2,
    salesNum: 1,
  },{
    id: '12312312313',
    name: 'Marcos Silva',
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
    columns={header}
    data={promotersData}
    />
  )
}
