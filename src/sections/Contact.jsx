import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Get in touch with me.</p>
      </div>

      <div className="contact-body">
        <p className="contact-text">
          I am always open to chatting about projects, ideas, collaborations or just a friendly hello.
          The best way to reach me is via email.
        </p>

        <div className="contact-links">
          <a href="mailto:yadavdikshant22@email.com" className="contact-row">
            <span className="contact-label">email</span>
            <span className="contact-value">yadavdikshant22@email.com</span>
          </a>
          <a href="https://github.com/Dikshant-Yadav" target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-label">github</span>
            <span className="contact-value">https://github.com/Dikshant-Yadav</span>
          </a>
          <a href="www.linkedin.com/in/dikshant-yadav-9bb898291" target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-label">linkedin</span>
            <span className="contact-value">www.linkedin.com/in/dikshant-yadav-9bb898291</span>
          </a>
        </div>

        <div className="contact-note">
          <p>Based in Your City, Your Country.</p>
          <p>Usually replies within a day.</p>
        </div>
      </div>
    </section>
  );
}