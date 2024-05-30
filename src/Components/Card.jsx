import bookmarkIcon from "../Assets/bookmark23.png"; // Import your bookmark icon image
import bookmarkedIcon from "../Assets/icons8-bookmark-24.png"; // Import your bookmarked icon image
import styles from "./Styles/Card.module.css"; // Import your Card component styles
import dummy from "../Assets/dummy.jpg";
import { useState, useEffect } from "react";

const Card = ({ movie }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const localStorageKey = `${userEmail}_${movie.imdbID}`;
    const isAlreadyBookmarked = localStorage.getItem(localStorageKey);
    if (isAlreadyBookmarked) {
      setIsBookmarked(true);
    }
  }, [movie.imdbID]);

  const handleBookmark = () => {
    const userEmail = localStorage.getItem("email");
    const localStorageKey = `${userEmail}_${movie.imdbID}`;
    const isAlreadyBookmarked = localStorage.getItem(localStorageKey);
    setIsBookmarked(!isBookmarked);
    if (isAlreadyBookmarked) {
      localStorage.removeItem(localStorageKey);
    } else {
      localStorage.setItem(localStorageKey, JSON.stringify(movie));
    }
  };

  return (
    <div className={styles.card}>
      <img src={movie.Poster !== "N/A" ? movie.Poster : dummy} alt={movie.Title} className={styles.cardImage} />
      <img 
        src={isBookmarked ? bookmarkedIcon : bookmarkIcon} 
        onClick={handleBookmark}  
        alt="Bookmark Icon" 
        className={styles.bookmarkIcon} 
      />
      <div className={styles.cardDetails}>
        <h2 className={styles.cardTitle}>{movie.Title}</h2>
        <p className={styles.cardYear}>{movie.Year}</p>
      </div>
    </div>
  );
};

const MainCard = ({ movies }) => {
  return (
    <div className={styles.mainContainer}>
      {movies.length > 0 ? (
        movies.map((movie) => <Card key={movie.imdbID} movie={movie} />)
      ) : (
        <p className={styles.noResultsP}>You can search for your fav movies Examaple - Batman,Starwars</p>
      )}
    </div>
  );
};

export default MainCard;


