import React, { useState, useEffect } from 'react'
import "./ApiCrypto.css"

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
                <div>
                    <p>{crypto.name}</p>
                    <a href={crypto.explorer} target='blank'>Info Sur l' {crypto.name}</a>
                </div>
            ))
        }
        </div>
    </div>
  )
}
