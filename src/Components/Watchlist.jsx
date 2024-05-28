import styles from "./Styles/Watchlist.module.css";
import guestIcon from "../Assets/guestIcon.png";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../Assets/out.png";
import { useState , useEffect } from "react";
import MainCard from "./Card";

const Watchlist = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [wishlistMovies, setWishlistMovies] = useState([]);
  useEffect(() => {
    // Get all keys from local storage that match the pattern for movie bookmarks
    const localStorageKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith(email)
    );
    // Extract movie data associated with each key
    const movies = localStorageKeys.map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });

    // Set the extracted movies to state
    setWishlistMovies(movies);
  }, [email]);
  console.log(wishlistMovies)

  const handleHome = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
    window.location.reload();
  };

 
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1 className={styles.headers}>Watchlists</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.home} onClick={handleHome}>
          Home
        </div>
        <hr className={styles.divider} />
        <div className={styles.list}>
          <button className={styles.watchlistButton}>Watchlist</button>
        </div>
        <div className={styles.profile}>
          <img src={guestIcon} alt="Profile" />
          <span>{email}</span>
          <img
            className={styles.logOut}
            src={logoutIcon}
            onClick={handleLogout}
            alt="Profile"
          />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <h1 className={styles.headersWL}>My Watchlist</h1>
        <p className={styles.paraWL}>About this watchlist:</p>
        <p className={styles.paraWL}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          veritatis!
        </p>
        {/* Card Component */}

      </div>
      <div className={styles.watchListCard}>
      <MainCard movies={wishlistMovies} />
      </div>
      
    </div>
  );
};

export default Watchlist;
