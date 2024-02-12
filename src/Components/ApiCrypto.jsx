import React, { useState, useEffect } from 'react'
import "./ApiCrypto.css"
import { Link } from 'react-router-dom';
import { useCryptoContext } from "../Context/CryptoProvider"

export const ApiCrypto = () => {
    const { cryptoData, setCryptoData } = useCryptoContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coincap.io/v2/assets/");
            const data = await response.json();
            console.log(data.data);
            setCryptoData(data.data)
        };
        fetchData();
    },[setCryptoData]);


  return (
    <div className='ApiCrypto'>
         <h3 style={{textDecoration:"underline", color:"red"}}>ApiCrypto</h3>
         <input placeholder="Searth the internet..." type="text" name="text" class="input"/>
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
                </div>
                </Link>
            ))
        }
        </div>
    </div>
  )
}
