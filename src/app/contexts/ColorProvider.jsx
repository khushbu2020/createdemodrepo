import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { LOGIN_CONFIGURATION } from "../components/maincomponents/utils";

// Create the Context
const ColorContext = createContext();

// Create a Provider component
export const ColorProvider = ({ children }) => {
  const [getdata, setgetdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSetData = async () => {
    try {
      const storedAuthToken = sessionStorage.getItem("sessionToken");
      // console.log(storedAuthToken);

      const response = await axios.get(LOGIN_CONFIGURATION, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      // console.log(response);

      if (response.data && response.data.data && response.data.data[0]) {
        setgetdata(response.data.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch data. Error details:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  useEffect(() => {
    handleSetData();
    // console.log("login...");
  }, []);

  // Initial states set to `null`
  const [currentColor, setCurrentColor] = useState(null);
  const [file, setfile] = useState(null);
  const [sitetitle, setsitetitle] = useState(null);
  const [sitesubtitle, setsitesubtitle] = useState(null);

  useEffect(() => {
    if (getdata) {
      setCurrentColor(getdata.theme_colour);
      setfile(getdata.image);
      setsitetitle(getdata.title);
      setsitesubtitle(getdata.sub_title);
    }
  }, [getdata]);
  // "/wallpaper.png"
  // ("#F37423");
  return (
    <ColorContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        file,
        setfile,
        sitetitle,
        setsitetitle,
        sitesubtitle,
        setsitesubtitle,
        loading,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook for accessing the ColorContext
export const useColor = () => useContext(ColorContext);
