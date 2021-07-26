import React, { Fragment , useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'

import classes from './Table.module.css'

export default function Table(props) {
  const abbreviationsHandler = (name) => {
    const namesNum = name.toString().split(' ').length
    return (
      name.toString().split(' ')[0][0].toUpperCase() + name.toString().split(' ')[namesNum - 1][0].toUpperCase()
    )
  }

  const columns = React.useMemo(
    () => props.columns, [props.columns]
    )

  const data = React.useMemo(
    () => props.data, [props.data]
    )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return(<td {...cell.getCellProps()}>
                  {console.log(cell.value)}
                  {cell.column.id === "name" ? <div className={classes.nameIcon}>
                    <span className={classes.initials}>{abbreviationsHandler(cell.value)}</span>
                  </div>: null}
                  {cell.render("Cell")}
                  </td>)
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
