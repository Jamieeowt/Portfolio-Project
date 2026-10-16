const certificates = [
  {
    code: "AI—01",
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    date: "Oct 2026",
    id: "AIEDA0016110188487",
    logo: "/datacamp.png"
  },
  {
    code: "FE—02",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Oct 2026",
    id: "E32C814C5BCC",
    logo: "/hackerrank.png"
  },
  {
    code: "SE—03",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Oct 2026",
    id: "A201AA79087E",
    logo: "/hackerrank.png"
  },
  {
    code: "CSS—04",
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    id: "89CD41DOOOOB",
    logo: "/hackerrank.png"
  },
  {
    code: "JV—05",
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    id: "90F1EEBBECB3",
    logo: "/hackerrank.png"
  },
  {
    code: "SQL—06",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    id: "D4784BBACB50",
    logo: "/hackerrank.png"
  }
];

const technicalSkills = ["HTML / CSS", "JavaScript", "React", "Java", "C", "SQL", "Git"];
const coreStrengths = ["Communication", "Problem Solving", "Collaboration", "Quick Learner"];

const root = document.querySelector("#root");

root.innerHTML = `
  <div class="site-shell">
    <aside class="sidebar">
      <div>
        <a class="brand" href="#about">JG<span>III</span></a>
        <div class="profile">
          <div class="avatar-wrap">
            <img src="/Jamie.jpg" alt="Jaime Gerolao III" class="avatar-img" onerror="this.src='/favicon.svg'">
            <span class="available-dot"></span>
          </div>
          <p class="profile-name">Jaime Gerolao III</p>
          <p class="profile-role">Web Developer</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="#about"><span>01</span>About me</a>
          <a href="#education"><span>02</span>Education & Skills</a>
          <a href="#certificates"><span>03</span>Certificates</a>
          <a href="#contact"><span>04</span>Contact</a>
        </nav>
      </div>

      <div class="sidebar-footer">
        <button class="theme-toggle" id="theme-btn" type="button">
          <span class="theme-label">Toggle Theme</span>
        </button>
        <div class="socials">
          <a href="https://www.linkedin.com/in/jaime-gerolao-4b880a329/" target="_blank" rel="noreferrer">LI</a>
          <a href="https://github.com/Jamieeowt" target="_blank" rel="noreferrer">GH</a>
          <a href="https://www.facebook.com/Harme.gg" target="_blank" rel="noreferrer">FB</a>
        </div>
        <p>© 2026 / Quezon City</p>
      </div>
    </aside>

    <main>
      <section class="hero" id="about">
        <div class="hero-topline">
          <span>Portfolio / 2026</span>
          <span class="availability"><i></i>Available for opportunities</span>
        </div>
        <div class="hero-content">
          <p class="overline">Hello, I am Jaime</p>
          <h1>Web developer building <em>clean, purposeful</em> digital experiences.</h1>
          <p class="hero-copy">Motivated individual looking to apply technical skills in a challenging environment. Quick learner with a passion for web development, software engineering, and artificial intelligence.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="#contact">Contact me</a>
            <a class="button button-light" href="#certificates">Explore credentials</a>
          </div>
        </div>
        <div class="quick-facts">
          <div><span>Based in</span><strong>Quezon City, PH</strong></div>
          <div><span>Currently</span><strong>BSIT Student</strong></div>
          <div><span>Focus</span><strong>Web Development</strong></div>
        </div>
      </section>

      <section class="content-section" id="education">
        <div class="section-heading">
          <div class="section-kicker"><span>01</span><span>Education & Skills</span></div>
          <h2>Always learning. Always building.</h2>
        </div>
        <div class="education-grid">
          <article class="education-card">
            <p class="meta">Bachelors Degree</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p class="institution">Polytechnic University of the Philippines</p>
            <div class="date">2024 — Present</div>
          </article>
          <div class="skills-panel">
            <div class="skill-group">
              <p>Technical Toolkit</p>
              <div class="pills">
                ${technicalSkills.map((s) => `<span>${s}</span>`).join("")}
              </div>
            </div>
            <div class="skill-group">
              <p>Core Strengths</p>
              <div class="pills light">
                ${coreStrengths.map((s) => `<span>${s}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section muted-section" id="certificates">
        <div class="section-heading">
          <div class="section-kicker"><span>02</span><span>Certificates</span></div>
          <h2>Credentials that mark the journey.</h2>
        </div>
        <div class="certificate-grid">
          ${certificates
            .map(
              (cert) => `
            <article class="certificate-card">
              <div class="certificate-preview">
                <span>${cert.code}</span>
                <div class="certificate-mark">
                  <img src="${cert.logo}" alt="${cert.issuer} logo" class="cert-logo-img" onerror="this.style.display='none'">
                </div>
                <small>${cert.issuer}</small>
              </div>
              <div class="certificate-body">
                <div>
                  <p>${cert.issuer}</p>
                  <h3>${cert.title}</h3>
                </div>
                <div class="credential-meta">
                  <div><span>Issued</span><strong>${cert.date}</strong></div>
                  <div><span>Credential ID</span><strong>${cert.id}</strong></div>
                </div>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="contact-intro">
          <div class="section-kicker light-kicker"><span>03</span><span>Get in touch</span></div>
          <h2>Have an opportunity in mind? Let us connect.</h2>
          <p>I am open to internships, web development roles, and collaborative opportunities.</p>
          <div class="contact-details">
            <a href="mailto:gerolaojaime@gmail.com"><span><small>Email</small>gerolaojaime@gmail.com</span></a>
            <a href="tel:+639647617454"><span><small>Phone</small>+63 964 761 7454</span></a>
            <div><span><small>Location</small>25 Kalayaan B, Batasan Hills, QC</span></div>
          </div>
        </div>
        <form id="contact-form">
          <label>Your name<input name="name" type="text" placeholder="Your name" required></label>
          <label>Email address<input name="email" type="email" placeholder="your@email.com" required></label>
          <label>Message<textarea name="message" rows="5" placeholder="Leave a message..." required></textarea></label>
          <button class="button button-white" type="submit">Send message</button>
        </form>
      </section>

      <footer class="main-footer">
        <p>© 2026 Jaime Gerolao III. All rights reserved.</p>
        <a href="#about">Back to top ↑</a>
      </footer>
    </main>
  </div>
`;

// Dark / Light Theme Controller
let isDark = localStorage.getItem("portfolio-theme") === "dark";

function updateTheme() {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  const btn = document.querySelector("#theme-btn .theme-label");
  if (btn) btn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

document.querySelector("#theme-btn")?.addEventListener("click", () => {
  isDark = !isDark;
  updateTheme();
});

document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get("name") || "";
  const email = form.get("email") || "";
  const message = form.get("message") || "";
  const subject = encodeURIComponent("Portfolio Message from " + name);
  const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
  window.location.href = "mailto:gerolaojaime@gmail.com?subject=" + subject + "&body=" + body;
});

updateTheme();