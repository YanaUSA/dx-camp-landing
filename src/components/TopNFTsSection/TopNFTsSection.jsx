import axios from "axios";
import React, { useEffect, useState } from "react";
import TopNFTMobileGrid from "./TopNFTMobileGrid/TopNFTMobileGrid";
import useMatchMedia from "@hooks/useMatchMedia";

import styles from "./TopNFTsSection.module.scss";

axios.defaults.baseURL = "https://63e631f5c8839ccc28533b27.mockapi.io";

const TopNFTsSection = () => {
  const { isMobile } = useMatchMedia();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/dexola");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <section>
      <div className={styles.titleBox}>
        <h2 aria-label="section title">Top NFTs</h2>
        <span className={styles.sectionTitleSpan} aria-label="section order number">02</span>
      </div>

      {isMobile ? <TopNFTMobileGrid data={data} /> : <table className={styles.NFTtable} role="table" aria-label="Top NFTs users table" aria-describedby="users_table_description">
        <thead className={styles.NFTtableHead} role="rowgroup">
          <tr role="row">
            <th id="avatar" role="cell"></th>
            <th id="name" role="cell">NFT Name</th>
            <th id="rarity" role="cell">Rarity Level</th>
            <th id="total-games" role="cell">Total Games</th>
            <th id="games-won" role="cell">Games Won</th>
            <th id="price" role="cell">Price (ETH)</th>
          </tr>
        </thead>
        <tbody className={styles.NFTtableBody} role="rowgroup">
          {data.map((item, id) => (
            <tr key={id} role="row">
              <td headers="avatar" role="columnheader">
                <img
                  src={item.avatar}
                  alt="NFT user avatar"
                  className={styles.userAvatar}
                />
              </td>
              <td headers="name" role="cell">{item.name}</td>
              <td headers="rarity" role="cell">{item.rarity}</td>
              <td headers="total-games" role="cell">{item.totalGames}</td>
              <td headers="games-won" role="cell">{item.gamesWon}</td>
              <td headers="price" role="cell">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>}      
    </section>
  );
};

export default TopNFTsSection;
