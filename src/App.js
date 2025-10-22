import React from "react";
import "./styles.css";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const SportsContext = React.createContext();
export default function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Rakesh"}>
        <SportsContext.Provider value={"Cricket"}>
          <ComponentC />
        </SportsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
