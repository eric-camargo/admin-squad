import React, { useState } from 'react'

import Table from '../components/Listing/Table'

export default function LeadsList() {
  const header = [
    {
      name: 'promoterName',
      title: 'Promotor'
    },
    {
      name: 'leadName',
      title: 'Indicação'
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
      promoterName: 'Jose da Silva',
      leadName: 'Marcos da Silva',
      email: 'marcos@gmail.com',
      phone: '1192922-2222',
      stage: 'Visita'
    },{
      id: '44242',
      promoterName: 'Jose da Silva',
      leadName: 'Marcos da Silva',
      email: 'marcos@gmail.com',
      phone: '1192922-1112',
      stage: 'Venda'
    },{
      id: '1444',
      promoterName: 'Jose da Silva',
      leadName: 'Silvia da Silva',
      email: 'msilvia@gmail.com',
      phone: '119293-2312',
      stage: 'Pasta'
    },{
      id: '3313',
      promoterName: 'Jose da Silva',
      leadName: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-4444',
      stage: 'Venda'
    },{
      id: '12311243',
      promoterName: 'Jose da Silva',
      leadName: 'Bob Odenkirk',
      email: 'bob@gmail.com',
      phone: '119111-1111',
      stage: 'Indicação'
    },
]

const [leadsData, setPromotersData] = useState(LEADSDUMMYDATA)

  return (
    <Table 
    header={header}
    data={leadsData}
    />
  )
}
