import React, { Fragment, useState } from 'react'

import Table from '../components/Listing/Table'
import SearchBar from '../components/UI/SearchBar'

export default function LeadsList() {
  const header = [
    {
      name: 'name',
      title: 'Indicação'
    },
    {
      name: 'promoter',
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
      name: 'stage',
      title: 'Etapa'
    }
  ]

  const LEADSDUMMYDATA = [
    {
      id: '12313',
      promoter: 'Jose da Silva',
      name: 'Marcos da Silva',
      email: 'marcos@gmail.com',
      phone: '1192922-2222',
      stage: 'Visita'
    },{
      id: '44242',
      promoter: 'Jose da Silva',
      name: 'Marcos da Silva',
      email: 'marcos@gmail.com',
      phone: '1192922-1112',
      stage: 'Venda'
    },{
      id: '1444',
      promoter: 'Jose da Silva',
      name: 'Silvia da Silva',
      email: 'msilvia@gmail.com',
      phone: '119293-2312',
      stage: 'Pasta'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '12311243',
      promoter: 'Jose da Silva',
      name: 'Bob Odenkirk',
      email: 'bob@gmail.com',
      phone: '119111-1111',
      stage: 'Indicação'
    }]

const [leadsData, setPromotersData] = useState(LEADSDUMMYDATA)

  return (
    <Fragment>
      <SearchBar></SearchBar>
      <Table 
      header={header}
      data={leadsData}
      />
    </Fragment>
  )
}
