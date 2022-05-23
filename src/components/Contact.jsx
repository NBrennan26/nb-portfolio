import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact-cont" id="contact">
      <div>
        <a
          href="https://github.com/NBrennan26"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={80} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/nick-brennan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={80} />
        </a>
      </div>
      <div>
        <a href="mailto:nbrennan26@gmail.com" target="_blank" rel="noreferrer">
          <FiMail size={80} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
