import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { initialValue, useSmartContext } from "../../state/state";
import Boards from "../Boards/Boards";

const Home = () => {
 
  const {state,dispatch} = useSmartContext()
  console.log(initialValue, "initial");
  return (
    <>
      <Header />

      {state.isLoggedIn ? <Boards /> : null}
    </>
  );
};

export default Home;
