import React, { useState, Fragment } from 'react'

import Table from '../components/Listing/Table'
import SearchBar from '../components/UI/SearchBar'

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
    email: 'jose@teste.com',
    phone: '1194464-6460',
    recommendationsNum: 12,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 2,
    salesNum: 1,
  },{
    id: '12312312313',
    name: 'Marcos Silva',
    email: 'marcos@teste.com',
    phone: '1194264-6460',
    recommendationsNum: 6,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 2,
    salesNum: 1,
  },{
    id: '123141414',
    name: 'William Safra',
    email: 'will@teste.com',
      phone: '1115214-6460',
    recommendationsNum: 12,
    validationsNum: 5,
    visitsNum: 4,
    documentationsNum: 0,
    salesNum: 0,
  },{
    id: '123141414',
    name: 'Bob Burnquist',
    email: 'bob@teste.com',
    phone: '1194234-6460',
    recommendationsNum: 82,
    validationsNum: 51,
    visitsNum: 41,
    documentationsNum: 22,
    salesNum: 11,
  },{
    id: '123141414',
    name: 'Gabriel Medeiros',
    email: 'gabriel@teste.com',
    phone: '3299111-6460',
    recommendationsNum: 9,
    validationsNum: 7,
    visitsNum: 3,
    documentationsNum: 2,
    salesNum: 0,
  },{
    id: '123141414',
    name: 'Thiago Potter Souza',
    email: 'james@teste.com',
    phone: '1192253-6460',
    recommendationsNum: 36,
    validationsNum: 22,
    visitsNum: 19,
    documentationsNum: 12,
    salesNum: 4,
  },{
    id: '123141414',
    name: 'Jonas Freitas',
    email: 'jonas@teste.com',
    phone: '1191353-6460',
    recommendationsNum: 6,
    validationsNum: 2,
    visitsNum: 1,
    documentationsNum: 0,
    salesNum: 0,
  },]

  const [promotersData, setPromotersData] = useState(PROMOTERSDUMMYDATA)

  return (
    <Fragment>
      <SearchBar />
      <Table 
      columns={header}
      data={promotersData}
      />
    </Fragment>
  )
}
