import { useContext } from "react";
import { UserContext, SportsContext } from "../App";

const ComponentF = () => {
  const userName = useContext(UserContext);
  const sportsName = useContext(SportsContext);
  return (
    <div>
      <h1>ComponentF - {userName} </h1>
      <h2>Sports - {sportsName} </h2>
    </div>
  );
};

export default ComponentF;
