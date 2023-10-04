import piggyBank from "../assets/piggy.png";
import locationPins from "../assets/locationpins.png";
import wheelchair from "../assets/wheelchair.png";

const Benefits: React.FC = () => {
  return (
    <section className="px-5 lg:px-8">
      <h1 className="font-bold text-4xl tracking-tight md:text-4x">Benefits</h1>

      <hr className="mt-2 bg-slate-400" />

      <div className="grid gap-5 mt-5 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold pb-2">Affordable</h2>
            <figure className="px-10">
              <img src={piggyBank} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              laudantium atque quae vel? Odit, qui.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold pb-2">Available</h2>
            <figure className="px-10">
              <img src={locationPins} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, ullam.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold pb-2">Accessible</h2>
            <figure className="px-10">
              <img src={wheelchair} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              veritatis dolor doloremque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
