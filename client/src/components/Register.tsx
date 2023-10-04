import { useState } from "react";
import { Link } from "react-router-dom";
import busSignUp from "../assets/bussignup.png";

const Register: React.FC = () => {
  const [step, setSteps] = useState(1);

  const handleSubmit = () => {
    setSteps(prev => prev + 1);

    console.log("Registration complete!");
  };

  const display_steps = () => {
    if (step == 1) {
      return (
        <>
          <h1 className="text-3xl font-bold text-info">Contact Information</h1>

          <div className="md:flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="111-111-1111"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex justify-center sm:justify-end mt-5">
            <button
              onClick={() => setSteps(prev => prev + 1)}
              className="btn btn-wide rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      );
    } else if (step == 2) {
      return (
        <>
          <h1 className="text-3xl font-bold text-info">Application Details</h1>

          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Have you applied to <em>ALAS</em> before?
              </span>
            </label>

            <div className="flex gap-5">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text ml-3">Yes</span>
              </label>

              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Why do you plan to join?</span>
            </label>

            <div className="flex flex-col">
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select
                </option>
                <option>Dolor</option>
                <option>Beate in Abe</option>
                <option>Cumque</option>
                <option>necessitatibus illo</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2">
              Please upload a <em>combined</em> PDF file with all your
              documents.
            </p>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
          </div>

          <section className="mt-5 space-y-2">
            <h2 className="text-lg font-semibold text-blue-500">
              Terms and Conditions
            </h2>
            <p className="italic text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              fugit architecto aspernatur pariatur tempora totam. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Temporibus, ad?
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>

            <p className="italic text-sm">
              Lorem ipsum, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Temporibus, ad? Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </section>

          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />

            <span className="label-text ml-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              itaque.
            </span>
          </label>

          <div className="flex justify-between">
            <button
              onClick={() => setSteps(prev => prev - 1)}
              className="btn rounded-xl mt-6"
            >
              Back
            </button>

            <button
              onClick={() => {
                handleSubmit();
              }}
              className="btn bg-blue-500 text-white sm:btn-wide rounded-xl hover:bg-blue-600 mt-6"
            >
              Submit
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-3xl font-bold text-info">
            Registration Complete!
          </h1>

          <em className="text-slate-600">
            Your application is currently under review. You can expect to
            receive your full registration details via email within a{" "}
            <strong>4-5 business days</strong>.
          </em>

          <img src={busSignUp} className="lg:max-w-md lg:block mx-auto" />

          <div className="flex justify-center">
            <Link to="/">
              <button className="btn bg-blue-500 text-white btn-wide rounded-xl hover:bg-blue-600 mt-6">
                Home
              </button>
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <div className="card mx-auto lg:w-2/3 lg:shadow-lg">
      <div className="card-body">{display_steps()}</div>
    </div>
  );
};

export default Register;
