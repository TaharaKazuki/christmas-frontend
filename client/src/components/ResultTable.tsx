import React from 'react'

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>名前</td>
            <td>正解数</td>
            <td>獲得ポイント</td>
            <td>結果</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>サンプル太郎</td>
            <td>03</td>
            <td>20</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
