import React, { Fragment } from 'react'

import classes from './Table.module.css'

export default function Table(props) {
  const abbreviationsHandler = (name) => {
    const namesNum = name.split(' ').length
    return (
      name.split(' ')[0][0].toUpperCase() + name.split(' ')[namesNum - 1][0].toUpperCase()
    )
  }

  return (
    <table>
      <tr>
        {props.header.map((col) => (
          <th>{col.title}</th>
        ))}
      </tr>
      {props.data.map((row) => (
        <tr key={row.id}>
          {props.header.map((col) => (
            col.name === "name" ? 
              <td>
                <div className={classes.nameIcon}>
                  <span className={classes.initials}>{abbreviationsHandler(row[col.name])}</span>
                </div>
                {row[col.name]}
              </td>
            :
            <td>
              {row[col.name]}
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
