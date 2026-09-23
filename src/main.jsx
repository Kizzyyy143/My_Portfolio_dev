import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Home, UserRound, BriefcaseBusiness, Settings2, Code2,
  Sun, Moon, ArrowUpRight, Download, Mail, Link2,
  Sparkles, Database, MonitorCog, Heart, Plus
} from "lucide-react";
import "./style.css";

const projects = [
  { title: "School Management System", text: "React + FastAPI school platform with students, teachers, courses and attendance.", tech: "React / FastAPI" },
  { title: "Coffee Shop System", text: "Desktop ordering and payment workflow with SQL Server.", tech: "C# / SQL Server" },
  { title: "E-Commerce Website", text: "Responsive shopping experience with product, cart and checkout pages.", tech: "React / JavaScript" }
];

function App() {
  const [dark, setDark] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="navbar">
        <div className="brand" onClick={() => scrollTo("hero")}>
          <div className="brand-mark">&lt; R</div>
          <div className="brand-name">DEV<br/>404</div>
        </div>

        <nav>
          <button className="nav-item active" onClick={() => scrollTo("hero")}><Home size={15}/> HOME</button>
          <button className="nav-item" onClick={() => scrollTo("about")}><UserRound size={15}/> ABOUT</button>
          <button className="nav-item" onClick={() => scrollTo("projects")}><BriefcaseBusiness size={15}/> PROJECTS</button>
          <button className="nav-item" onClick={() => scrollTo("services")}><Settings2 size={15}/> SERVICES</button>
          <button className="nav-item" onClick={() => scrollTo("skills")}><Code2 size={15}/> SKILLS</button>
        </nav>

        <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Moon size={17}/> : <Sun size={17}/>}
        </button>
      </header>

      <main>
        <section id="hero" className="hero section-grid">
          <div className="hero-copy">
            <p className="hello">HI, I'M YIV BORA <span>|</span></p>

            <h1 className="name-art">
              <span className="outline-blue">CODE</span> BY <span className="blue-box">DEV</span><span className="slash">/</span><span>404</span>
            </h1>

            <h2><span className="blue-text">FULLSTACK</span> DEVELOPER</h2>
            <h2 className="designer">&amp; UI/UX <span>DESIGNER</span></h2>

            <p className="intro">
              I build exceptional, high-performing digital experiences, clean web
              interfaces, and robust backend systems with modern technologies.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                View Projects <ArrowUpRight size={17}/>
              </button>
              <a className="secondary-btn" href="/cv.pdf" download>
                Download CV <Download size={16}/>
              </a>
            </div>

            <div className="stats">
              <div><strong>5+</strong><span><Sparkles size={14}/> SATISFIED CLIENTS</span></div>
              <div><strong>10+</strong><span><BriefcaseBusiness size={14}/> COMPLETED PROJECTS</span></div>
              <div><strong>20+</strong><span><MonitorCog size={14}/> TECHNOLOGIES</span></div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>

            <div className="hero-card">
              <div className="photo">
                <img src="/IMG_0223.JPG" alt="Developer workspace"/>
                <div className="photo-overlay"></div>
              </div>
              <div className="connect">LET'S CONNECT:</div>
              <div className="socials">
                <a href="mailto:yivbora@gmail.com"><Mail size={15}/> Email</a>
                <a href="https://www.linkedin.com/in/yivbora"><Link2 size={15}/> LinkedIn</a>
                <a href="https://github.com/yivbora"><Link2 size={15}/> GitHub</a>
              </div>
            </div>

          
            
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-label">01 / ABOUT</div>
          <h2>Building digital experiences with <span>purpose.</span></h2>
          <p>I am a developer focused on modern web applications, clean UI, databases and practical software systems.</p>
        </section>

        <section id="projects" className="content-section">
          <div className="section-label">02 / PROJECTS</div>
          <h2>Selected <span>projects.</span></h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">PROJECT</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <small>{p.tech}</small>
                <ArrowUpRight className="project-arrow"/>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-label">03 / SERVICES</div>
          <h2>What I <span>build.</span></h2>
          <div className="service-grid">
            <div><Code2/><h3>Web Development</h3><p>Responsive React websites and web applications.</p></div>
            <div><MonitorCog/><h3>UI / UX Design</h3><p>Clean interfaces focused on usability and visual hierarchy.</p></div>
            <div><Database/><h3>Backend & Database</h3><p>FastAPI, PHP, SQL Server, MySQL and SQLite systems.</p></div>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-label">04 / SKILLS</div>
          <h2>My <span>technology stack.</span></h2>
          <div className="skills-list">
            {["React", "JavaScript", "HTML / CSS", "Python", "FastAPI", "PHP", "C#", "C++", "MySQL", "SQL Server", "Git / GitHub", "Figma","Tailwind CSS","Bootstrap","C Programming","Video Editing"].map(s => <span key={s}>{s}</span>)}
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 DEV/404</span>
        <span>Designed & Built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
