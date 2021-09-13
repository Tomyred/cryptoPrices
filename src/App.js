import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import TableCoins from './components/TableCoins/TableCoins';
import 'bootstrap/dist/css/bootstrap.css'
function App() {

  const [Coins, setCoins] = useState([])
  const [Search, setSearch] = useState('')
  const coinUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'

  const getData = async () => {
   const res = await axios.get(coinUrl);
   setCoins(res.data)
  }
  useEffect(()=>{
   getData();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <input 
        placeholder='Search' 
        className='form-control bg-dark text-light border-0 mt-4 text-center'
        onChange={e => setSearch(e.target.value)}
        />
        <TableCoins coins={Coins} search={Search} />
      </div>
      
    </div>
  );
}

export default App;
