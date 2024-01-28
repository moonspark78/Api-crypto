import React, { useState, useEffect } from 'react'
import "./ApiCrypto.css"
import { Link } from 'react-router-dom';

export const ApiCrypto = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coincap.io/v2/assets/");
            const data = await response.json();
            console.log(data.data);
            setCryptoData(data.data)
        };
        fetchData();
    },[]);


  return (
    <div className='ApiCrypto'>
         <h3 style={{textDecoration:"underline", color:"red"}}>ApiCrypto</h3>
        <div className='ApiCryptoCard'>
        {
            cryptoData.map(crypto => (
                <Link to={`/crypto/${crypto.id}`}>
                <div key={crypto.id}>
                    <p>{crypto.name}</p>
                    <img 
                            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`} 
                            alt={`${crypto.name} Icon`}
                            style={{width:"64px", height:"64px"}}
                    />
                    <a href={crypto.explorer} target='blank'>Info Sur l' {crypto.name}</a>
                </div>
                </Link>
            ))
        }
        </div>
    </div>
  )
}
