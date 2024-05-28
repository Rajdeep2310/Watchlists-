import { Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import DashboardPage from "./Pages/DashboardPage";
import WatchlistPage from "./Pages/WatchlistPage";
import { useEffect } from "react";
import { getMovie } from "./Apis/DataApi";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  useEffect(() => {
    getMovie().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
        <Route path="/dashboard/watchlist" element={<PrivateRoute element={<WatchlistPage />} />} />
      </Routes>
    </>
  );
};

export default App;

