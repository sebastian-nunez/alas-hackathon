import { Link } from "react-router-dom";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const News: React.FC = () => {
  return (
    <>
      <section className="px-5 lg:px-8 mt-10">
        <h1 className="font-bold text-3xl tracking-tight md:text-4xl text-slate-800">
          News Updates
        </h1>

        <hr className="mt-2 bg-slate-400 mb-6" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card card-side border shadow-md">
            <figure className="ml-8 w-1/3">
              <img
                src={news1}
                className="h-4/5 object-cover object-top drop-shadow-md rounded-xl"
              />
            </figure>

            <div className="card-body w-2/3">
              <header className="flex justify-between">
                <h2 className="card-title text-2xl overflow-x-auto">
                  Free COVID tests by mail are back, starting Monday
                </h2>
              </header>

              <p className="text-slate-500">
                People will be able to go to COVIDTests.gov and get four free
                tests per household, starting next week. The Biden
                administration says it is trying to prepare for the fall and
                winter COVID season.
              </p>

              <div className="card-actions justify-end">
                <Link to="https://health.wusf.usf.edu/npr-health/2023-09-21/free-covid-tests-by-mail-are-back-starting-monday">
                  <button className="btn btn-sm rounded-full">Read More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side border shadow-md">
            <figure className="ml-8 w-1/3">
              <img
                src={news2}
                className="h-4/5 object-cover object-top drop-shadow-md rounded-xl"
              />
            </figure>

            <div className="card-body w-2/3">
              <header className="flex justify-between">
                <h2 className="card-title text-2xl overflow-x-auto">
                  How will rural Americans fare during Medicaid unwinding?
                  Experts fear they're on their own
                </h2>
              </header>

              <p className="text-slate-500">
                Experts say the lack of help available to rural Americans in
                navigating insurance options puts them at greater risk of losing
                health coverage than people in metropolitan areas.
              </p>

              <div className="card-actions justify-end">
                <Link to="https://health.wusf.usf.edu/health-news-florida/2023-09-20/experts-worry-how-rural-americans-will-fare-during-medicaid-unwinding">
                  <button className="btn btn-sm rounded-full">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
