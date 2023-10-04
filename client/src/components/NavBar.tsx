import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-blue-500">
            <Share2 />
          </span>
          ALAS
        </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <Link to="/login">Find a Ride</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/qrcode">QR Code</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
