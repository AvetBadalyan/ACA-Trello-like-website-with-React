import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import VisitePage from "../../Components/VisitePage";

const Home = () => {
  return (
    <>
      <Header />
      <VisitePage />
      <div>
        <Button />
        <Link to="/boards"> Home </Link>
      </div>
    </>
  );
};

export default Home;
