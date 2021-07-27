import React, { Fragment, useState } from 'react'

import Table from '../components/Listing/Table'
import SearchBar from '../components/UI/SearchBar'

export default function LeadsList() {
  const header = [
    {
      Header: 'Indicação',
      accessor: 'name'
    },
    {
      Header: 'Promotor',
      accessor: 'promoter'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Telefone',
      accessor: 'phone'
    },
    {
      Header: 'Etapa',
      accessor: 'stage'
    }
  ]

  const LEADSDUMMYDATA = [
    {
      id: '12313',
      promoter: 'Jose da Silva',
      name: 'Marcos da Silva',
      email: 'marcos@gmail.com',
      phone: '1192922-1111',
      stage: 'Visita'
    },{
      id: '44242',
      promoter: 'Jose da Silva',
      name: 'Pedro Pinheiro',
      email: 'pedro@gmail.com',
      phone: '1192322-1112',
      stage: 'Venda'
    },{
      id: '1444',
      promoter: 'Jose da Silva',
      name: 'Silvia da Silva',
      email: 'msilvia@gmail.com',
      phone: '119293-4152',
      stage: 'Pasta'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Ingrid Esper',
      email: 'ingrid@gmail.com',
      phone: '1192922-2315',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Johan da Silva',
      email: 'johan@gmail.com',
      phone: '1192922-6143',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Silvana Torres',
      email: 'sil@gmail.com',
      phone: '1192922-2345',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Rebecca Norman',
      email: 'becca@gmail.com',
      phone: '1192922-9876',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Jose da Silva',
      name: 'Wellington Pereira',
      email: 'well@gmail.com',
      phone: '1192922-1616',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'William Safra',
      name: 'Ian Gorbatchev',
      email: 'ian@gmail.com',
      phone: '1192922-2721',
      stage: 'Venda'
    },{
      id: '3313',
      promoter: 'Marcos Silva',
      name: 'Yuri de Arruda',
      email: 'yuri@gmail.com',
      phone: '1192922-2843',
      stage: 'Venda'
    },{
      id: '12311243',
      promoter: 'Gabriel Medeiros',
      name: 'Bob Odenkirk',
      email: 'bob@gmail.com',
      phone: '119111-4511',
      stage: 'Indicação'
    }]

const [leadsData, setPromotersData] = useState(LEADSDUMMYDATA)

  return (
    <Fragment>
      <SearchBar />
      <Table 
      columns={header}
      data={leadsData}
      />
    </Fragment>
  )
}
