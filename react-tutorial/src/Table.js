import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { characterData } = this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

const TableBody = () => {
  return (
    <tbody>
    </tbody>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

export default Table