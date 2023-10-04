import { Link } from "react-router-dom";

const Confirmed: React.FC = () => {
  return (
    <section className="card mx-auto lg:w-2/3 lg:shadow-lg p-10">
      <h1 className="text-3xl font-bold text-info mb-3">
        Your ride has been confirmed!
      </h1>
      <em className="mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ad.
      </em>

      <Link to="/qrcode" className="mx-auto">
        <button className="btn bg-blue-500 text-white btn-wide rounded-xl hover:bg-blue-600 mt-6">
          View QR Code
        </button>
      </Link>
    </section>
  );
};

export default Confirmed;
