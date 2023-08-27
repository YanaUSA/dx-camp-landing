import axios from 'axios';
import React, { useEffect, useState } from 'react';


import styles from './TopNFTsSection.module.scss';

axios.defaults.baseURL = 'https://63e631f5c8839ccc28533b27.mockapi.io'


const TopNFTsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

  async function getData() {
    try {
      const response = await axios.get('/dexola');
      setData(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  getData()
  }, []);

    return (
      <section>       
      <div>
      <h2>Top NFTs</h2>
        <span>02</span>
      </div>
      <div className={styles}>
      <table className={styles}>
        <thead>
          <tr>
            <th className={styles}></th>
            <th className={styles}>NFT Name</th>
            <th className={styles}>Rarity Level</th>
            <th className={styles}>Total Games</th>
            <th className={styles}>Games Won</th>
            <th className={styles}>Price (ETH)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td className={styles}>
                <img src={item.avatar} alt="NFT user avatar" className={styles} />
              </td>
              <td className={styles}>{item.name}</td>
              <td className={styles}>{item.rarity}</td>
              <td className={styles}>{item.totalGames}</td>
              <td className={styles}>{item.gamesWon}</td>
              <td className={styles}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>          
      </section>
    );
  };
  
  export default TopNFTsSection;