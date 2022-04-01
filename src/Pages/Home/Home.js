import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { useSmartContext } from "../../state/state";
import Boards from "../Boards/Boards";

const Home = () => {
  const { state, dispatch } = useSmartContext();
  return (
    <>
      <Header />
      {state.isLoggedIn && <Boards />}
    </>
  );
};

export default Home;
