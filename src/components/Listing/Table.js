import React from 'react'

import classes from './Table.module.css'

export default function Table(props) {
  return (
    <div className={classes.card}>
      <table>
        <thead>
          <tr>
            <th>Promotor</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Indicações</th>
            <th>Validações</th>
            <th>Visitas</th>
            <th>Pastas</th>
            <th>Vendas</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((promoter) => (
            <tr key={promoter.id}>
              <td>{promoter.name}</td>
              <td>{promoter.email}</td>
              <td>{promoter.phone}</td>
              <td>{promoter.recommendationsNum}</td>
              <td>{promoter.validationsNum}</td>
              <td>{promoter.visitsNum}</td>
              <td>{promoter.documentationsNum}</td>
              <td>{promoter.salesNum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
