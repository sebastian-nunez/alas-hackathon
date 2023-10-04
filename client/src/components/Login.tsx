import { Link, useLocation, useParams } from "react-router-dom";

import orderRide from "../assets/orderride.png";
import { useState } from "react";

const DEV_OVERRIDE = true; // TODO: place in .env

const Login: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState("");

  const checkCredentials = async () => {
    // dev override
    if (DEV_OVERRIDE) {
      window.location.href = "/ride";
      return;
    }

    if (accountNumber.length == 0) {
      alert("Unable to submit an empty account number!");
    }

    const url = "http://localhost:3000/users/login/" + accountNumber;
    const res = await fetch(url);

    if (res.status == 200) {
      window.location.href = "/ride";
    } else {
      alert("No account was found for account number: " + accountNumber);
    }
  };

  return (
    <section className="card mx-auto lg:w-2/3 lg:shadow-lg p-10">
      <h1 className="text-3xl font-bold text-info mb-3">Login</h1>
      <img src={orderRide} className="hidden lg:block max-w-xs mx-auto" />

      <label className="label">
        <span className="label-text">Account #</span>
      </label>

      <input
        type="text"
        placeholder="111-11-1111"
        className="input input-bordered w-full"
        onChange={e => setAccountNumber(e.target.value)}
      />

      {/* <Link to="/ride" className="mx-auto"> */}
      <button
        className="btn btn-wide mt-5 mx-auto rounded"
        onClick={checkCredentials}
      >
        Login
      </button>
      {/* </Link> */}

      <span className="mt-12 md:mt-5 text-slate-600">
        <em>Not a member? </em>
        <Link to="/register" className="link">
          Sign Up
        </Link>
      </span>
    </section>
  );
};

export default Login;
