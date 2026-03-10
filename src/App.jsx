import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import BlogPost from "./sections/BlogPost";
import "./index.css";

export default function App() {
  const [active, setActive] = useState("home");
  const [activeBlog, setActiveBlog] = useState(null);

  const handleSetActive = (section) => {
    setActive(section);
    setActiveBlog(null);
  };

  const renderContent = () => {
    if (active === "blog" && activeBlog) {
      return <BlogPost post={activeBlog} onBack={() => setActiveBlog(null)} />;
    }
    switch (active) {
      case "home": return <Home />;
      case "projects": return <Projects />;
      case "skills": return <Skills />;
      case "blog": return <Blog onPostClick={setActiveBlog} />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar active={active} setActive={handleSetActive} />
      <main className="content">
        {renderContent()}
      </main>
    </div>
  );
}