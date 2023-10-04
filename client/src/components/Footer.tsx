import { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const submitEmail = async (e: any) => {
    e.preventDefault();

    const url = "http://localhost:3000/emails/" + email;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => res.text())
      .then(data => console.log("Success:", data))
      .catch(error => console.error("Error:", error));
  };

  return (
    <footer className="footer px-5 md:px-10 py-10 bg-blue-500 text-white">
      <nav>
        <header className="footer-title">KPMG Services</header>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/services/audit.html"
        >
          Audit & Assurance
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/services/tax.html"
        >
          Tax Advisory
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/services/advisory.html"
        >
          Advisory Services
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/services/enterprise.html"
        >
          Private Enterprise
        </a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/about/who-we-are.html"
        >
          About us
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/about/who-we-are.html"
        >
          Contact
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/misc/contact.html?form=contact"
        >
          Jobs
        </a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/misc/legal.html"
        >
          Terms of use
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/misc/privacy.html"
        >
          Privacy policy
        </a>
        <a
          className="link link-hover"
          href="https://kpmg.com/xx/en/home/misc/accessibility.html"
        >
          Accessibility
        </a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="input input-bordered w-full pr-16 text-black"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />

            <button
              className="btn absolute top-0 right-0 rounded-l-none"
              onClick={e => submitEmail(e)}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
