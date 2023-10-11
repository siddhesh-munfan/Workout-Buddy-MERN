import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout BuddY</h2>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
