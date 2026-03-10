import Banner from "../components/Banner";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <Banner />

      <div className="home-intro">
        <h1 className="home-greeting">Hello There.</h1>
        <p className="home-name">I'm <span className="highlight">Dikshant</span>.</p>

        <p className="home-para">
  An undergrad at NIT Kurukshetra, I spend my time programming, building projects, and learning new things. I'm interested in System Design, Artificial Intelligence and Open Source. When not programming I like to read, listen to music, and game.
</p>

        <p className="home-tagline">This site is where I share projects, notes, and experiments.</p>
      </div>

      <div className="home-links">
        <a href="https://github.com/Dikshant-Yadav" target="_blank" rel="noreferrer" className="home-link">
          github
        </a>
        <span className="home-link-divider">·</span>
        <a href="mailto:yadavdikshant22@email.com" className="home-link">
          email
        </a>
        <span className="home-link-divider">·</span>
        <a href="https://www.linkedin.com/in/dikshant-yadav-9bb898291" target="_blank" rel="noreferrer" className="home-link">
  linkedin
</a>
      </div>

      {/* <p className="home-footer">Made with 💖 by Dikshant</p> */}
    </section>
  );
}