import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-brand">
        <img src={logo} alt="GadgetGrade Logo" className="nav-logo" />
        <h1>Gadget Grade</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/see/smartphones" className="nav-button">View Reviews</Link>
        <Link to="/compare/smartphones" className="nav-button">Compare</Link>
        <Link to="/rewards" className="nav-button">Rewards</Link>
        <div className="nav-button">
        {localStorage.getItem('auth-token') ? <Link onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}to={'logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 #007bff"}> Logout </Link> :
        <Link to={'login'} className={"btn_secondary_rounded gap-x-2 medium-16"}> Login </Link> }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

