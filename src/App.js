import React from "react";
import "./styles.css";
import ComponentC from "./components/ComponentC";
import Component1 from "./components/customhooks/Component1";
import Component2 from "./components/Component2";
import ErrorBoundary from "./components/ErrorBoundary";
import UnControlledComponent from "./components/UnControlledComponent";
import ControlledComponent from "./components/ControlledComponent";

export const UserContext = React.createContext();
export const SportsContext = React.createContext();
export default function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Rakesh"}>
        <SportsContext.Provider value={"Cricket"}>
          <ComponentC />
        </SportsContext.Provider>
      </UserContext.Provider> */}
      <Component1 />
      <ErrorBoundary>
        <Component2 />
      </ErrorBoundary>
      <UnControlledComponent />
      <ControlledComponent />
    </div>
  );
}
