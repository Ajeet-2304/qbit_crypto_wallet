// import React from 'react'
import '../css/Chart.css'
const Chart = () => {
  return (
    <>
        <div className="chart">
            <div className="chart-heading">
                <span>Chart</span>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>24h chg%</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>BNB</td>
                        <td>519.2</td>
                        <td>-2.79%</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>BTC</td>
                        <td>58,178</td>
                        <td>-1.47%</td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td>ETH</td>
                        <td>2,471.72</td>
                        <td>-1.30%</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>DOGS</td>
                        <td>0.0011989</td>
                        <td>-6.01%</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>SOL</td>
                        <td>133.13</td>
                        <td>-2.10%</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>PEPE</td>
                        <td>0.00000741</td>
                        <td>-2.37%</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default Chart