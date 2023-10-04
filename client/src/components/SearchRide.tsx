import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import busRoute1 from "../assets/busroute1.png";

const SearchRide: React.FC = () => {
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const results_table = () => {
    return (
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Scheduled Time</th>
              <th>ETA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>9:30 AM</td>
              <td>9:29 mins</td>
              <td>On-time</td>
            </tr>

            {/* row 2 */}
            <tr>
              <td>10:00 AM</td>
              <td>9:57 AM</td>
              <td>On-time</td>
            </tr>

            {/* row 3 */}
            <tr>
              <td>11:00 AM</td>
              <td>11:05 AM</td>
              <td>Late</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const display_confirmation = () => {
    return (
      <div>
        <img src={busRoute1} className="lg:max-w-lg lg:block mx-auto rounded" />

        {results_table()}

        {/* Confirmation card */}
        <div className="card w-full mt-3">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Confirm your ride?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              qui!
            </p>

            <div className="card-actions justify-end">
              <Link to="/confirmed">
                <button className="btn bg-blue-500 text-white hover:bg-blue-600">
                  Confirm
                </button>
              </Link>

              <Link to="/">
                <button className="btn btn-ghost">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="card mx-auto lg:w-2/3 lg:shadow-lg p-10">
      <h1 className="text-3xl font-bold text-info mb-3">Finding Your Ride</h1>
      <p className="mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui
        cumque fugit aspernatur culpa enim nobis dolore unde doloribus vel.
      </p>

      {!isSearching ? (
        display_confirmation()
      ) : (
        <span className="loading loading-dots loading-lg text-blue-500 mx-auto"></span>
      )}
    </section>
  );
};

export default SearchRide;
