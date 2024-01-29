import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useCryptoContext } from "../Context/CryptoProvider"

export const ApiCryptoDetail = () => {
    const { id } = useParams();
    const { cryptoData } = useCryptoContext();

    const cryptoDetail = cryptoData.find(crypto => crypto.id === id);
    if (!cryptoDetail) {
        return <div>Loading...</div>;
    }


  return (
    <div className='ApiCryptoDetail'>
            <h3 style={{ textDecoration: "underline", color: "red" }}>{cryptoDetail.name} Details</h3>
            <div>
                <p>Rank: {cryptoDetail.rank}</p>
                <p>Supply: {cryptoDetail.supply}</p>
                <p>Price USD: {cryptoDetail.priceUsd}</p>
                <a href={crypto.explorer} target='blank' style={{marginTop:"7px"}}>Info Sur l' {crypto.name}</a>
                <img 
                            src={`https://assets.coincap.io/assets/icons/${cryptoDetail.symbol.toLowerCase()}@2x.png`} 
                            alt={`${crypto.name} Icon`}
                            style={{width:"64px", height:"64px", marginTop:"7px"}}
                />
                {/* Add more details as needed */}
            </div>
        </div>

  )
}
