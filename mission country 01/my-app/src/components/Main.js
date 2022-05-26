import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";


export const inputContext = createContext();

export default function Main() {
  const [countriesList, setCountriesList] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesList(data);
      });
  }, []);

  const filterList = countriesList.filter((country) =>
    country.name.common.toLowerCase().startsWith(inputVal.toLowerCase())
  );

  return <main>
      <inputContext.Provider value={setInputVal}>
        <Header num={filterList.length} />
      </inputContext.Provider>
      <List list={filterList} />
    </main>
  
}
