import React from 'react'

function Table({data, getItem, getActions, ...props}) {
  if(data.length === 0){
    return (
      <div>No data</div>
    );
  }

  const headers = Object.keys(data[0]).map(key => <th className="p-s2 text-sm" key={key}>{key}</th>)
  const rows = data.map((item, index) => (
    <tr key={index}>
      {Object.keys(item).map(attr => (
        <td className="p-s2 text-sm">{getItem ? getItem(attr, item[attr], item) : (typeof item[attr] === 'string' || typeof item[attr] === 'number') ? item[attr] : JSON.stringify(item[attr])}</td>
      ))}
      {getActions && (
        <td>{getActions(index)}</td>
      )}
    </tr>
  ))

  return (
    <table {...props}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
       {rows} 
      </tbody>
    </table>
  )
}

export default Table
