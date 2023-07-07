import React, { createContext, useContext, useState } from "react";
import { data } from "../datas/data";


//Step 1)Create a context
const AppContext = createContext();


export default function AppProvider({ children }) {

  const [user, setUser] = useState(data);
  
  return (
    //Step 2) Create provider subscriber model
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

//Step 3) Use Context
export const AppState = () => {
  return useContext(AppContext);
};
