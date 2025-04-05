import axios from "axios";
import { useEffect, useState } from "react";
export let useApi = (API_URL) => {
  let [dbData, setDbData] = useState(null);

  async function getAPIData(URL) {
    try {
      // let response = await axios.get(URL);
      setDbData(response.data);
    } catch (error) {
      // console.log("Error while fetching signupusers");
    }
  }

  useEffect(() => {
    getAPIData(API_URL);
  }, []);

  return dbData;
};
 