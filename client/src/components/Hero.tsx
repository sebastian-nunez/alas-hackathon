import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[calc(100vh_+_5rem)] mt-[-10rem] md:mt-[-9rem]">
      <div className="hero-content flex-row">
        <section>
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Introducing
            <br />
            <span className="text-blue-500">
              {" "}
              <Typewriter
                onInit={typewriter => {
                  typewriter.pauseFor(600).typeString("ALAS").start();
                }}
              />
            </span>
          </h1>

          <p className="py-5 text-lg text-slate-500 md:text-2xl">
            <em>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, vero?
            </em>
          </p>

          <Link to="/login">
            <button className="btn bg-blue-500 btn-block sm:btn-wide text-white rounded-lg hover:bg-blue-600 mt-6 drop-shadow-sm">
              Find a Ride
            </button>
          </Link>
        </section>

        <img src={heroImg} className="lg:max-w-md hidden lg:block" />
      </div>
    </div>
  );
};

export default Hero;
