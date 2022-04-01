import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { initialValue } from "../../state/state";

const Home = () => {
  const { categories } = initialValue;
  console.log(initialValue)
  return (
    <>
      <Header />
      {categories.map((category) => (
        <Link key={123} to=''>{category.category}</Link>
      ))}
    </>
  );
};

export default Home;
