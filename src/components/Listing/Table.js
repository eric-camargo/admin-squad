import React from 'react'

import classes from './Table.module.css'

export default function Table(props) {
  return (
    <div className={classes.card}>
      <table>
        <thead>
          <tr>
            {props.header.map((col) => (
              <th>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.id}>
              {props.header.map((col) => (
                <td>{row[col.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
