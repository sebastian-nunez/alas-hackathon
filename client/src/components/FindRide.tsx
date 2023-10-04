import { Link } from "react-router-dom";
import busRoute1 from "../assets/busroute1.png";

const FindRide: React.FC = () => {
  return (
    <section className="card mx-auto lg:w-2/3 lg:shadow-lg p-10">
      <h1 className="text-3xl font-bold text-info mb-3">Find a Ride!</h1>
      <p className="mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ad.
      </p>

      <label className="label">
        <span className="label-text">Destination</span>
      </label>

      <div className="md:join">
        <input
          type="text"
          placeholder="123 West Lane"
          className="input input-bordered w-full max-w-xs"
        />

        <Link to="/search">
          <button className="btn px-12 mt-6 mx-auto md:mx-0 md:mt-0">
            Search
          </button>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-slate-600 mt-12 mb-6">
        Route Map
      </h2>

      <img src={busRoute1} className="lg:max-w-lg lg:block mx-auto rounded" />
    </section>
  );
};

export default FindRide;
