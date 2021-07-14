import React from 'react'

export default function PromotersList(props) {
  return (
    <table>
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
        {props.promoters.map((promoter) => (
          <tr key={promoter.id}>
            <td>{promoter.name}</td>
            <td>{promoter.email}</td>
            <td>{promoter.phone}</td>
            <td>{promoter.recommentationsNum}</td>
            <td>{promoter.validationsNum}</td>
            <td>{promoter.visitsNum}</td>
            <td>{promoter.documentationsNum}</td>
            <td>{promoter.salesNum}</td>
          </tr>
        ))}
    </table>
  )
}
