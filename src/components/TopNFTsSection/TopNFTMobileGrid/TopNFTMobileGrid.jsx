import styles from "./TopNFTMobileGrid.module.scss";

const TopNFTMobileGrid = ({ data }) => {
  return (
    <ul className={styles.NFTList}>
      {data.map((item, id) => (
        <li key={id} className={styles.listWrapper}>
          <div className={styles.mobNFTtable} aria-label="Top NFTs users table" aria-describedby="users_table_description">
            <div className={styles.rarityLevel}>
              <p className={styles.textStyle}>Rarity:</p>
            </div>
            <div className={styles.totalGames}>
              <p className={styles.textStyle}>Total Games:</p>
            </div>
            <div className={styles.gamesWon}>
              <p className={styles.textStyle}>Games Won:</p>
            </div>
            <div className={styles.rarityLevelValue}>
              <p className={styles.textStyle}>{item.rarity}</p>
            </div>
            <div className={styles.totalGamesValue}>
              <p className={styles.textStyle}>{item.totalGames}</p>
            </div>
            <div className={styles.gamesWonValue}>
              <p className={styles.textStyle}>{item.gamesWon}</p>
            </div>
            <div className={styles.NFTuserAvatar}>
              <img
                src={item.avatar}
                alt="NFT user avatar"
                className={styles.userAvatar}
              />
            </div>
            <div className={styles.NFTName}>
              <p className={styles.boldTextStyle}>{item.name}</p>
            </div>
            <div className={styles.Price}>
              <p className={styles.boldTextStyle}>{item.price}ETH</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TopNFTMobileGrid;
