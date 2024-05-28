import styles from "./Styles/Dashboard.module.css";
import guestIcon from "../Assets/guestIcon.png";
import MainCard from "./Card";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../Assets/out.png";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const email = localStorage.getItem("email");


  const handleSearch = async () => {
    try {
      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          s: searchTerm,
          apikey: "dd272563",
        },
      });
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data from OMDb API:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleHome = () =>{
    navigate("/dashboard")
  }

  const handleWatchlist = () => {
    navigate("/dashboard/watchlist")
  }
 
  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
    window.location.reload();
  }
  return (
    <>
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
          <div className={styles.home} onClick={handleHome}><button>Home</button></div>
          <hr className={styles.divider} />
          <div className={styles.list}>
            <button className={styles.watchlistButton} onClick={handleWatchlist}>My Watchlist </button>
          </div>
          <div className={styles.profile}>
            <img src={guestIcon} alt="Profile" />
            <span>{email}</span>
            <img className={styles.logOut}src={logoutIcon} onClick={handleLogout} alt="Profile" />
            
          </div>
        </div>

        <div className={styles.mainContent}>
          <h1>
            Welcome to <span className={styles.redTxt}>Watchlists</span>
          </h1>
          <p>Browse movies and TV shows and share them with your friends.</p>
          <p>
            Just click the sign to add a movie, the poster to see more details
            or the trash can to remove it from your list.
          </p>
          <div className={styles.movieSearch}>
            <input
              type="text"
              placeholder="Search your fav movies..."
              className={styles.searchMovieInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.searchMovieButton} onClick={handleSearch}>Search</button>
          </div>
          <MainCard movies={movies}  />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
