import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");

  const [skills, setSkills] = useState({
    react: 0,
    python: 0,
    aws: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setSkills({ react: 80, python: 85, aws: 75 });
    }, 500);
  }, []);

  const renderPage = () => {
    if (page === "dashboard") {
      return (
        <>
          {/* Profile */}
          <section className="card">
            <h2>👨‍💻 Profile</h2>
            <p><strong>Pankaj More</strong></p>
            <p>DevOps & Cloud Enthusiast</p>
          </section>

          {/* Skills */}
          <section className="card">
            <h2>🧠 Skills</h2>

            <div className="skill">
              <p>React</p>
              <div className="bar"><div style={{ width: skills.react + "%" }}></div></div>
            </div>

            <div className="skill">
              <p>Python</p>
              <div className="bar"><div style={{ width: skills.python + "%" }}></div></div>
            </div>

            <div className="skill">
              <p>AWS</p>
              <div className="bar"><div style={{ width: skills.aws + "%" }}></div></div>
            </div>
          </section>

          {/* Projects */}
          <section className="card">
            <h2>🚀 Projects</h2>

            <div className="project-grid">
              <div className="project-card">
                <h3>Lost & Found AI</h3>
                <p>NLP-based intelligent matching system.</p>
              </div>

              <div className="project-card">
                <h3>CodeGuardian</h3>
                <p>DevOps code review assistant.</p>
              </div>
            </div>
          </section>
        </>
      );
    }

    // HOME PAGE
    return (
      <div className="home">
        <div className="overlay">
          <h1>Smart Dev Dashboard 🚀</h1>
          <p>Build. Deploy. Scale.</p>
          <button onClick={() => setPage("dashboard")}>
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>

      <div className="main">

        {/* Navbar */}
        {page !== "home" && (
          <nav className="navbar">
            <h2>🚀 Dev</h2>

            <ul>
              <li onClick={() => setPage("home")}>🏠 Home</li>
              <li onClick={() => setPage("dashboard")}>📊 Dashboard</li>
              <li>👨‍💻 Profile</li>
              <li>🧠 Skills</li>
              <li>🚀 Projects</li>
            </ul>

            <div className="nav-actions">
              <button onClick={() => setPage("home")}>🏠</button>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀" : "🌙"}
              </button>
            </div>
          </nav>
        )}

        {renderPage()}

      </div>
    </div>
  );
}

export default App;