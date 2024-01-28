import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const ApiCryptoDetail = () => {
    const { id } = useParams();
    const [cryptoDetail, setCryptoDetail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
            const data = await response.json();
            console.log(data.data);
            setCryptoDetail(data.data)
        };
        fetchData();
    }, [id]);

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
                {/* Add more details as needed */}
            </div>
        </div>

  )
}
