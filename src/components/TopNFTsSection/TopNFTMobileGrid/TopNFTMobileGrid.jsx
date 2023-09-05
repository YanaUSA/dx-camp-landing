import styles from "./TopNFTMobileGrid.module.scss";

const TopNFTMobileGrid = ({ data }) => {
  return (
    <ul className={styles.NFTList}>
      {data.map((item, id) => (
        <li key={id} className={styles.listWrapper}>
          <div className={styles.mobNFTtable} role="table" aria-label="Top NFTs users table" aria-describedby="users_table_description">
            <div className={styles.rarityLevel} role="rowgroup">
              <p className={styles.textStyle} role="cell">Rarity:</p>
            </div>
            <div className={styles.totalGames} role="rowgroup">
              <p className={styles.textStyle} role="cell">Total Games:</p>
            </div>
            <div className={styles.gamesWon} role="rowgroup">
              <p className={styles.textStyle} role="cell">Games Won:</p>
            </div>
            <div className={styles.rarityLevelValue} role="row">
              <p className={styles.textStyle} role="cell">{item.rarity}</p>
            </div>
            <div className={styles.totalGamesValue} role="row">
              <p className={styles.textStyle} role="cell">{item.totalGames}</p>
            </div>
            <div className={styles.gamesWonValue} role="row">
              <p className={styles.textStyle} role="cell">{item.gamesWon}</p>
            </div>
            <div className={styles.NFTuserAvatar} role="cell">
              <img
                src={item.avatar}
                alt="NFT user avatar"
                className={styles.userAvatar}
              />
            </div>
            <div className={styles.NFTName} role="row">
              <p className={styles.boldTextStyle} role="cell">{item.name}</p>
            </div>
            <div className={styles.Price} role="row">
              <p className={styles.boldTextStyle} role="cell">{item.price}ETH</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TopNFTMobileGrid;
