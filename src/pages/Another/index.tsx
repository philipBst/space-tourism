import { Link } from "react-router-dom";

const Another = () => {
  return (
    <div>
      another page
      <br /> <Link to="/">home</Link>{" "}
    </div>
  );
};

export default Another;
