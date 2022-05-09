import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({
    date: 0,
    temperature: "",
    city: "",
    pressure: "",
    humidity: "",
    wind: "",
    visibility: "",
  });
  const [weatherDaily, setWeatherDaily] = useState([]);
  const [modal, setModal] = useState({ show: false, text: "" });

  const closeModal = () => {
    setModal({ show: false });
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        weatherInfo,
        setWeatherInfo,
        modal,
        setModal,
        closeModal,
        setWeatherDaily,
        weatherDaily,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
