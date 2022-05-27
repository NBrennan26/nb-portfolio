function About() {
  return (
    <section className="about-cont" id="about">
      <div className="about-section">
        <div className="about-section-title">Here's a little about me: </div>
        <p>
          Originally from Chicago, I moved to Austin in 2021. Since then, I have
          been studying Web Development full time while continuing to serve as a
          Field Artillery Captain in the Army National Guard. In the past, I've
          worked some interesting jobs including bike courier, private security,
          bartender, real estate agent, and pharmacy tech.
        </p>
      </div>
      <ul className="about-section">
        <div className="about-section-title">Some Fun Facts: </div>
        <li>
          In College, I taught chess through an elementary school program.
        </li>
        <li>I once went on a 300 mile bike trip around Lake Michigan.</li>
        <li>
          I've lived in four states, been to 41 states, and travelled to 14
          countries.
        </li>
      </ul>
      <div className="resume-link-cont">
        <span className="resume-text">Interested in learning more? </span>
        <span>Find my </span>
        <a
          href="https://docs.google.com/document/d/1V53NGOU9sshmuPRwjP1SlpOKQ-Q4qcYeRhPyeKy17wU/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          R&eacute;sum&eacute; here
        </a>
      </div>
    </section>
  );
}

export default About;
