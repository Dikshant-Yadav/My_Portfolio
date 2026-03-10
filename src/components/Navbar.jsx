import "./Navbar.css";

const navItems = ["home", "projects", "skills", "blog", "contact"];

export default function Navbar({ active, setActive }) {
  return (
    <nav className="navbar">
      <div className="nav-pill">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${active === item ? "nav-active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item === "home" ? "⌂ " : ""}{item}
          </button>
        ))}
      </div>
    </nav>
  );
}