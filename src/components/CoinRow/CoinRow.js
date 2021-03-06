import React from 'react'
import './CoinRow.css'
const CoinRow = ({coin, index}) => {
    return (
        <tr className="tableRow">
            <td>{index}</td>
            <td>
                <img className="img-fluid me-2" src={coin.image} alt={coin.id} style={{width:'3%'}} />
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase'>{coin.symbol} </span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'} >{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume} </td>
        </tr>
    )
}

export default CoinRow
