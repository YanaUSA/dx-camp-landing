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
      <div className={styles.titleBox}>
      <h2>Top NFTs</h2>
        <span className={styles.sectionTitleSpan}>02</span>
      </div>

      <table className={styles.NFTtable}>
        <thead className={styles.NFTtableHead}>
          <tr>
            <th></th>
            <th>NFT Name</th>
            <th>Rarity Level</th>
            <th>Total Games</th>
            <th>Games Won</th>
            <th>Price (ETH)</th>
          </tr>
        </thead>
        <tbody className={styles.NFTtableBody}>
          {data.map((item, id) => (
            <tr key={id}>
              <td>
                <img src={item.avatar} alt="NFT user avatar" className={styles.NFTuserAvatar} />
              </td>
              <td>{item.name}</td>
              <td>{item.rarity}</td>
              <td>{item.totalGames}</td>
              <td>{item.gamesWon}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    );
  };
  
  export default TopNFTsSection;