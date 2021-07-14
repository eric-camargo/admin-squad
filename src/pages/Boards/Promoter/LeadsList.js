import React from 'react'

export default function LeadsList() {
  return (
    <table>
      <tr>
        <th>Promotor</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Indicações</th>

      </tr>
        {props.promoters.map((promoter) => (
          <tr key={promoter.id}>
            <td>{promoter.name}</td>
            <td>{promoter.email}</td>
            <td>{promoter.phone}</td>
            <td>{promoter.recommendationsNum}</td>
          </tr>
        ))}
    </table>
  )
}
