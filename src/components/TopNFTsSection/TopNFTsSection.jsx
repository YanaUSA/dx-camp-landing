import axios from "axios";
import React, { useEffect, useState } from "react";
import TopNFTMobileGrid from "./TopNFTMobileGrid/TopNFTMobileGrid";
import useMatchMedia from "../../hooks/useMatchMedia";

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
        <h2>Top NFTs</h2>
        <span className={styles.sectionTitleSpan}>02</span>
      </div>

      {isMobile ? <TopNFTMobileGrid data={data} /> : <table className={styles.NFTtable}>
        <thead className={styles.NFTtableHead}>
          <tr>
            <th id="avatar"></th>
            <th id="name">NFT Name</th>
            <th id="rarity">Rarity Level</th>
            <th id="total-games">Total Games</th>
            <th id="games-won">Games Won</th>
            <th id="price">Price (ETH)</th>
          </tr>
        </thead>
        <tbody className={styles.NFTtableBody}>
          {data.map((item, id) => (
            <tr key={id}>
              <td headers="avatar">
                <img
                  src={item.avatar}
                  alt="NFT user avatar"
                  className={styles.userAvatar}
                />
              </td>
              <td headers="name">{item.name}</td>
              <td headers="rarity">{item.rarity}</td>
              <td headers="total-games">{item.totalGames}</td>
              <td headers="games-won">{item.gamesWon}</td>
              <td headers="price">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>}      
    </section>
  );
};

export default TopNFTsSection;
