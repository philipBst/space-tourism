import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      this is home <Link to="/another">another</Link>
    </div>
  );
};

export default Home;
