import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import VisitePage from "../../Components/VisitePage";
import { useSmartContext } from "../../state/state";
import Boards from "../Boards/Boards";

const Home = () => {
  const { state, dispatch } = useSmartContext();
  return (
    <>
      <Header />
      <VisitePage/>
    </>
  );
};

export default Home;
