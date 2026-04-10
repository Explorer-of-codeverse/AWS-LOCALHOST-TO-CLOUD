import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aayush Bhattacherjee | Portfolio",
  description: "B.Tech CSE Student @ Lovely Professional University",
};

export default function Home() {
  return (
    <main className="pf">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .pf { font-family: 'Space Mono', monospace; background: #0a0e17; color: #e2e8f0; min-height: 100vh; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid #1e2d3d; }
        .logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: #00d4aa; letter-spacing: 2px; }
        .nav-links { display: flex; gap: 1.5rem; }
        .nav-links a { color: #8892a4; font-size: 0.75rem; text-decoration: none; letter-spacing: 1px; cursor: pointer; transition: color 0.2s; }
        .nav-links a:hover { color: #00d4aa; }
        .hero { padding: 5rem 2rem 4rem; max-width: 860px; margin: 0 auto; }
        .tag { display: inline-block; background: #0d1f2d; border: 1px solid #00d4aa33; color: #00d4aa; font-size: 0.65rem; letter-spacing: 2px; padding: 4px 12px; margin-bottom: 1.5rem; }
        .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 800; line-height: 1.1; color: #f0f4f8; margin-bottom: 1rem; }
        .hero h1 span { color: #00d4aa; }
        .cursor { display: inline-block; width: 3px; height: 1em; background: #00d4aa; animation: blink 1s step-end infinite; vertical-align: text-bottom; margin-left: 4px; }
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        .hero-sub { color: #8892a4; font-size: 0.85rem; line-height: 1.9; max-width: 520px; margin-bottom: 2.5rem; }
        .hero-sub strong { color: #00d4aa; }
        .btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-p { background: #00d4aa; color: #0a0e17; padding: 10px 22px; font-family: 'Space Mono', monospace; font-size: 0.78rem; font-weight: 700; border: none; cursor: pointer; letter-spacing: 1px; transition: background 0.2s; }
        .btn-p:hover { background: #00b894; }
        .btn-s { background: transparent; color: #00d4aa; padding: 10px 22px; font-family: 'Space Mono', monospace; font-size: 0.78rem; font-weight: 700; border: 1px solid #00d4aa55; cursor: pointer; letter-spacing: 1px; transition: all 0.2s; }
        .btn-s:hover { border-color: #00d4aa; background: #00d4aa11; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, #1e2d3d, transparent); margin: 0 2rem; }
        .section { padding: 3rem 2rem; max-width: 860px; margin: 0 auto; }
        .sec-label { font-size: 0.65rem; color: #00d4aa; letter-spacing: 3px; margin-bottom: 1rem; }
        .sec-title { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 700; color: #f0f4f8; margin-bottom: 1.5rem; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 520px) { .about-grid { grid-template-columns: 1fr; } }
        .info-card { background: #0d1a27; border: 1px solid #1e2d3d; padding: 1.2rem; border-left: 3px solid #00d4aa; }
        .info-card .lbl { font-size: 0.65rem; color: #8892a4; letter-spacing: 2px; margin-bottom: 6px; }
        .info-card .val { font-size: 0.88rem; color: #e2e8f0; font-weight: 700; }
        .info-card .val small { display: block; font-size: 0.72rem; color: #8892a4; font-weight: 400; margin-top: 3px; }
        .skills-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #0d1a27; border: 1px solid #1e2d3d; padding: 6px 14px; font-size: 0.72rem; color: #a0aec0; letter-spacing: 1px; transition: all 0.2s; cursor: default; }
        .skill:hover { border-color: #00d4aa55; color: #00d4aa; }
        .skill.hl { border-color: #00d4aa44; color: #00d4aa; background: #00d4aa0a; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
        .proj { background: #0d1a27; border: 1px solid #1e2d3d; padding: 1.4rem; transition: border-color 0.2s; cursor: pointer; }
        .proj:hover { border-color: #00d4aa44; }
        .proj-num { font-size: 0.65rem; color: #00d4aa33; margin-bottom: 8px; }
        .proj-name { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: #f0f4f8; margin-bottom: 8px; }
        .proj-desc { font-size: 0.75rem; color: #8892a4; line-height: 1.7; margin-bottom: 12px; }
        .proj-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .proj-tag { font-size: 0.62rem; color: #00d4aa; background: #00d4aa0d; padding: 2px 8px; border: 1px solid #00d4aa22; letter-spacing: 1px; }
        .contact-block { background: #0d1a27; border: 1px solid #1e2d3d; padding: 2rem; border-top: 3px solid #00d4aa; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .contact-left h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; color: #f0f4f8; margin-bottom: 4px; }
        .contact-left p { font-size: 0.75rem; color: #8892a4; }
        .socials { display: flex; gap: 10px; }
        .soc { background: #0a0e17; border: 1px solid #1e2d3d; padding: 8px 16px; font-size: 0.72rem; color: #8892a4; cursor: pointer; transition: all 0.2s; letter-spacing: 1px; font-family: 'Space Mono', monospace; text-decoration: none; }
        .soc:hover { border-color: #00d4aa55; color: #00d4aa; }
        .footer { text-align: center; padding: 1.5rem; font-size: 0.68rem; color: #3a4a5a; border-top: 1px solid #1e2d3d; }
        .status { display: inline-flex; align-items: center; gap: 6px; font-size: 0.68rem; color: #8892a4; margin-bottom: 1rem; }
        .dot { width: 7px; height: 7px; background: #00d4aa; border-radius: 50%; display: inline-block; animation: pulse 2s ease infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1) } 50% { opacity: 0.5; transform: scale(0.8) } }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="logo">AB_</div>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="status">
          <span className="dot" /> available for internships
        </div>
        <div className="tag">// hello, world</div>
        <h1>
          I&apos;m <span>Aayush</span>
          <br />
          Bhattacherjee
          <span className="cursor" />
        </h1>
        <p className="hero-sub">
          B.Tech CSE student @{" "}
          <strong>Lovely Professional University</strong> — Semester 2.
          <br />
          Building things with code. Currently exploring data structures, web
          dev, and everything in between.
        </p>
        <div className="btns">
          <a href="#projects" className="btn-p">view projects →</a>
          {/* <a href="/resume.pdf" className="btn-s">download cv</a> */}
        </div>
      </div>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="sec-label">// 01. about</div>
        <div className="sec-title">who am i?</div>
        <div className="about-grid">
          <div className="info-card">
            <div className="lbl">STUDENT</div>
            <div className="val">
              Aayush Bhattacherjee
              <small>B.Tech Computer Science &amp; Engineering</small>
            </div>
          </div>
          <div className="info-card">
            <div className="lbl">UNIVERSITY</div>
            <div className="val">
              Lovely Professional University<small>Phagwara, Punjab</small>
            </div>
          </div>
          <div className="info-card">
            <div className="lbl">CURRENT SEMESTER</div>
            <div className="val">
              Semester 2<small>2025 — 2029 batch</small>
            </div>
          </div>
          <div className="info-card">
            <div className="lbl">INTERESTS</div>
            <div className="val">
              Data Science · Web Dev · Open Source · Cloud Computing
              <small>Always learning something new</small>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SKILLS ── */}
      <section id="skills" className="section">
        <div className="sec-label">// 02. skills</div>
        <div className="sec-title">what i work with</div>
        <p
          style={{
            fontSize: "0.75rem",
            color: "#8892a4",
            marginBottom: "1.2rem",
          }}
        >
          languages &amp; tools I&apos;ve been picking up
        </p>
        <div className="skills-wrap">
          {["C", "MySQL", "Python"].map((s) => (
            <span key={s} className="skill hl">
              {s}
            </span>
          ))}
          {["Java", "HTML", "CSS", "JavaScript", "Git", "GitHub", "VS Code", "Hadoop"].map(
            (s) => (
              <span key={s} className="skill">
                {s}
              </span>
            )
          )}
        </div>
      </section>

      <div className="divider" />

      {/* ── PROJECTS ── */}
      <section id="projects" className="section">
        <div className="sec-label">// 03. projects</div>
        <div className="sec-title">things i&apos;ve built</div>
        <div className="projects-grid">
          {[
            {
              num: "01.",
              name: "WQI CALCULATOR",
              desc: "Developed an interactive WQI calculator based on various parameters available online based on Indian Rivers",
              tags: ["Python", "HTML", "CSS", "JS", "MathPlotLib"],
            },
            {
              num: "02.",
              name: "Project Alpha",
              desc: "Made several micro-projects on different topics during learning phase.",
              tags: ["HTML", "CSS", "JS"],
            },
            {
              num: "03.",
              name: "Project Beta",
              desc: "Currently in developing phase. Will be available soon. Stay tuned...",
              tags: ["C"],
            },
          ].map((p) => (
            <div key={p.num} className="proj">
              <div className="proj-num">{p.num}</div>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className="sec-label">// 04. contact</div>
        <div className="contact-block">
          <div className="contact-left">
            <h3>let&apos;s connect</h3>
            <p>Open to internships, collabs &amp; cool ideas.</p>
          </div>
          <div className="socials">
            
            <a href="https://github.com/Explorer-of-codeverse" className="soc" target="_blank" rel="noopener noreferrer">github</a>
            {/* <a href="https://linkedin.com/in/yourusername" className="soc" target="_blank" rel="noopener noreferrer">linkedin</a> */}
            <a href="mailto:aayushbhattacherjee@gmail.com" className="soc">email</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 Aayush Bhattacherjee — built with curiosity
      </footer>
    </main>
  );
}
